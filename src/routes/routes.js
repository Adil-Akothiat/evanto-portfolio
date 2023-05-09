import React, { 
    memo, 
    Suspense, 
    lazy, 
    useEffect, 
    useState,
    useCallback
} from "react";
import { Route, Routes} from "react-router-dom";
// client & query
import Loader from "../components/loader/loader";
import Navigation from "../components/navigation/navigation";

const Home = lazy(()=> import("../components/pages/home/home"));
const About = lazy(()=> import("../components/pages/about/about"));
const Blogs = lazy(()=> import("../components/pages/blogs/blogs"));
const Blog = lazy(()=> import("../components/pages/blogs/components/blog/blog"));
const Contact = lazy(()=> import("../components/pages/contact/contact"));
const Portfolio = lazy(()=> import("../components/pages/portfolio/portfolio"));
const Resume  = lazy(()=> import("../components/pages/resume/resume"));

export default memo(function MyRoutes () {
    const [blogs, setBlogs] = useState([]);
    const getApi = useCallback(async ()=> {
        const { data } = await fetch(`https://api.buttercms.com/v2/posts/?auth_token=${process.env.REACT_APP_API_TOKEN}`)
        .then(res=> res.json())
        const myBlogs = [];
        data.forEach(blog=> {
            const author = {
                profileImage: blog.author.profile_image,
                name: blog.author.first_name+" "+blog.author.last_name,
                job: blog.author.title,
                bio: blog.author.bio
            };
            const myBlog = {
                id: window.crypto.randomUUID(),
                author,
                image: blog.featured_image,
                created: blog.created,
                category: blog.categories[0].name,
                title: blog.seo_title,
                description: blog.meta_description,
                body: blog.body
            };
            myBlogs.push(myBlog);
        });
        setBlogs(myBlogs);
    }, [])
    useEffect(()=> {
        getApi();
        window.onload = ()=> getApi();
    }, [getApi])
    return (
        <>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="blogs/*" element={<Blogs blogs={blogs}/>}>
                    {
                        blogs?blogs.map((b, i)=> <Route 
                            key={"key-"+i}
                            path={`${b.id}`}
                            element={<Blog blog={b} />}
                        />)
                        :<div className="alert alert-warning">Data fail try again!</div>
                    }
                    </Route>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>    
            </Suspense>
        </>
    );
})
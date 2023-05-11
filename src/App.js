import React, { 
  Suspense, 
  lazy, 
  useEffect,
  useState
} from "react";
import Loader from "./components/loader/loader";
import Themes from "./components/themes/themes";
import getApi from "./components/blogApi/api";
const MyRoutes = lazy(()=> import("./routes/routes"));

export default function App () { 
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async ()=> {
    setBlogs(await getApi());
  }
  useEffect(()=> {
    getBlogs();
  }, [])
  return (
    <Suspense fallback={<Loader />}>
      <Themes />
      <MyRoutes blogs={blogs}/>
    </Suspense>
  )
}
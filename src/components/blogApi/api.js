const getApi = async ()=> {
    const { data } = await fetch(`https://api.buttercms.com/v2/posts/?auth_token=${process.env.REACT_APP_API_TOKEN}`)
    .then(res=> res.json());
    const myBlogs = [];
    data.forEach((blog, i)=> {
      const author = {
        profileImage: blog.author.profile_image,
        name: blog.author.first_name+" "+blog.author.last_name,
        job: blog.author.title,
        bio: blog.author.bio
      };
      const myBlog = {
        id: blog.slug+"blog73729"+i,
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
    return myBlogs;
}

export default = getApi;
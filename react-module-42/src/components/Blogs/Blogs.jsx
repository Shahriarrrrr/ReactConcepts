import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            <h1 className="text-4xl">Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog.id} 
                    blog  = {blog}
                    handleAddToBookmark = {handleAddToBookmark}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blogs;
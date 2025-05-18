import PropTypes from "prop-types";
import { FaBookBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,hashtags, cover, reading_time, author, author_image, posted_date} = blog
    console.log(blog)
    return (
        <div className="mb-20"> 
            <img className="w-full mb-8" src={cover} alt={`Cover Picture of title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_image} alt="" />
                    <div className="ml-6">
                        <h3 className="text-3xl">{author}</h3>
                        <p className="text-2xl">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min Read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-600"><FaBookBookmark></FaBookBookmark></button>
                    
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}


export default Blog;
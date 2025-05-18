import { Link, useNavigate } from "react-router";
const Post = ({post}) => {
    const {userId, title, id} = post
    const navigate  = useNavigate();
    const handleShowDetail = ()=> {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h3>{userId}</h3>
            <h3>{title}</h3>
            <Link to ={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>

    );
};

export default Post;
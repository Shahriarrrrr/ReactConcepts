import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post
    const navigate  = useNavigate();
    const handleGoback = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Details about</h3>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PostDetails;
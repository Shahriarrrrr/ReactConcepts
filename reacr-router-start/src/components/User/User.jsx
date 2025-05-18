import { Link } from "react-router";

const User = ({user}) => {
    const {name, email, id, phone} = user;

        return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{id}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
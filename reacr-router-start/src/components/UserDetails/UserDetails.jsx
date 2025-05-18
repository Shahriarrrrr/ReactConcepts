import { useLoaderData } from "react-router";


const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, email} = user
    return (
        <div>
            <h1>This is user details</h1>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <h3>{email}</h3>
        </div>
    );
};

export default UserDetails;
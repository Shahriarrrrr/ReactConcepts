import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';



const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h3>Total users {users.length}</h3>
           <h3>This is the users</h3>
           {
            users.map(user => <User key={user.id} user = {user}></User>)
           } 
        </div>
    );
};

export default Users;
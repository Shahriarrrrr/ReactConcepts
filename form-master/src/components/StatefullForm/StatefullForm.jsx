import { useState } from "react";

const StatefullForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)

    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(name)
        
    }

    const handleNameChange = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefullForm;
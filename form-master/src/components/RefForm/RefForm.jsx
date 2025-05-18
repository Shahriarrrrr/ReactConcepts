import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus()
    },[])
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value) // value direct cz ref name er mddhe dewa ref = {} -> ei vabe
        console.log(emailRef.current.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                ref={nameRef}
                type="text" name="name" />
                <br />
                <input
                ref={emailRef}
                type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;
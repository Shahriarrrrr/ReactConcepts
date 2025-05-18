import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Shahriar hooeked')
    const emailState = useInputState('shahriar@gmail.com')



    const handleSubmit  = e => {
        e.preventDefault()
        console.log(`form data :`, emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                value={name}
                onChange={handleNameChange}
                type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
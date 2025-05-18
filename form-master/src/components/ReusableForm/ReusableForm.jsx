const ReusableForm = ({formTitle, btnText = 'Submit', handleSubmit, children}) => {
    const handleLocalSubmit = e => {
        e.preventDefault()
        const name  = e.target.name.value
        const email = e.target.email.value
        const data =  {
            name: name,
            email: email
        }
        handleSubmit(data)
    }
    return (


        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input  type="email" name="email" />
                <br />
                <input type="submit" value={btnText} />
            </form>
        </div>
    );
};

export default ReusableForm;
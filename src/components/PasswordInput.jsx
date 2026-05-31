// Code PasswordInput Component Here

function PasswordInput(){
    
    function handleChange(event) {
        console.log("Entering password...")
    }


    return(
        <> <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password"  onChange={handleChange} />
        </>
    )
}

export default PasswordInput;
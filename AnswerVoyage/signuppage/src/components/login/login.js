import React, {useState} from "react";
import "./login.css"

const Login = () => {
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className="login">
            <h1>Login</h1>
            {console.log("User", user)}
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input>
            <div className="button">Login</div>
            <div>OR</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login
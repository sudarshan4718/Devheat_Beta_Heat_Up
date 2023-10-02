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

     const login = () => {
        axios.post("http://localhost:9000/login", user)
        .then(res => alert(res.data.message))
     }

    return (
        <div className="login">
            <h1>Login</h1>
            {console.log("User", user)}
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input>
            <div className="button" onClick={login}>Login</div>
            <div>OR</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login
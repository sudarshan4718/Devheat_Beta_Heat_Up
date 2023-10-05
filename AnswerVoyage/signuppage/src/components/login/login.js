import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";


const Login = ({ setLoginUser}) => {

    const history = useNavigate() ;

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
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history("/")
        })
     }

    return (
        <div>
      <header>
        <h1 className="header1">AnswerVoyage
        </h1>
    </header>
        <div className="parent-container">
        <div className="login">
            <h1>Login</h1>
            {console.log("User", user)}
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input>
            <div className="button" onClick={login}>Login</div>
            <div>OR</div>
            <div className="button" onClick={() => history("/register") }>Register</div>   
            {/* push back to register   */}
        </div>
        </div>
        </div>
    )
}

export default Login

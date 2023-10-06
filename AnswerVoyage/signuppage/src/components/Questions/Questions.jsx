import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Questions.css";
import { NavLink} from 'react-router-dom';


 const Questions =({ setLoginUser }) =>{
    const [data,setData] = useState([]);
            axios.get('http://localhost:9000/Questions')
            .then((response)=>{
                setData(response.data);
                // data = response.data
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })

            

    return (
        <>
        <header>
        <h1 className="header1">AnswerVoyage
        </h1>
    </header>
    <nav className="navbar">
      
      <ul className="navbar-list">
        <li><a href="/homepage">Home</a></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/logout" onClick={() => setLoginUser({}) }>Logout</a></li>
        <li><a href="/Questions">Questions</a></li>
      </ul>
    </nav>
        <div className="heading container">
         <h1 className="heading1"> See Questions Asked Here</h1>
         <br/>
         <br/>
         <ol> {data.map((item)=>(
           <li> <textarea key={item._id}>{item.questionText}</textarea></li>
         ))
            } </ol>
        </div>
      </>
       );

    
 };

export default Questions;

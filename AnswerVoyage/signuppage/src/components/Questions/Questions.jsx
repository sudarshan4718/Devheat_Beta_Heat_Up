import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Questions.css";


 const Questions =() =>{
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

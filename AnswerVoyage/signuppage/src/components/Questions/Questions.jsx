import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";



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
        <div>
         <h1> See Questions Asked Here</h1>
         <ul> {data.map((item)=>(
            <li key={item._id}>{item.questionText}</li>
         ))
            } </ul>
        </div>
      </>
       );

    
 };

export default Questions;


import React, { useState } from "react";
import "./homepage.css";
import Body from './Body';
import Contacts from "../Contacts/Contacts";
import { NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Homepage = ({ setLoginUser }) => {
  

  // Rest of your Homepage component code
  const navigate = useNavigate();
  

  return (
    <div className="homepage">
      <header>
        <h1>
          AnswerVoyage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
        </h1>
      </header>
      

    <nav className="navbar">
      
      <ul className="navbar-list">
        <li><a href="/homepage">Home</a></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/logout" onClick={() => setLoginUser({}) }>Logout</a></li>
      </ul>
    </nav>
      
    <Body/>
    </div>
  );
};

export default Homepage;

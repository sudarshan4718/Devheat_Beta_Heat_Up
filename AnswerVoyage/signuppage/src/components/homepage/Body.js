import React from 'react';
import './Body.css';
import bodyimage from './websitelogo.png';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="body-container">
      <div className="content">
        <div className="left-content">
          <h1>Welcome to Answer Voyage</h1>
          <p>Your go-to destination for answers to all your questions!</p>
          <p>Whether you're curious, seeking advice, or looking to share your knowledge, we've got you covered.</p>
          <button className="ask-button" onClick={() => navigate("/post-question")}>Ask Questions</button>
        </div>
        
      </div>
    </div>
  );
};

export default Body;


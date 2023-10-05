import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import "./post-question.css"

import { useNavigate } from 'react-router-dom';


function PostQuestion() {
  const [questionText, setQuestionText] = useState('');
  const [message, setMessage] = useState("");

 const navigate = useNavigate();

 const handleQuestionSubmit = async (e) => {
  e.preventDefault();
  console.log("Form Submitted");
  
  try {
    const response = await axios.post("http://localhost:9000/PostQuestion", {
      text: questionText,
    });
  
    if (response.status === 201) {
      // Question posted successfully
      console.log('Question Text:', questionText);
      console.log('Question posted:', response.data);
      console.log('handleQuestionSubmit function executed');
      // Clear the question text
      setQuestionText('');
    } else {
      console.error('Failed to post question:', response.data);
      console.log('handleQuestionSubmit function executed');
    }
  } catch (error) {

    console.error('Error posting question:', error);
  }
}


  return (
    <div className="post-question">
      <h2>Post a Question</h2>
      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Type your question here..."
        rows="4"
      ></textarea>
      <button onClick={handleQuestionSubmit}>Post</button>
    </div>
  );
}

export default PostQuestion;

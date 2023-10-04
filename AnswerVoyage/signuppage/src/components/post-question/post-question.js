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
    const response = await fetch("http://localhost:9000/post-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionText }),
    });

    const data = await response.json();
    console.log("Server Response:", response);
    console.log("Server Data:", data);

    if (response.ok) {
      setMessage("Question posted successfully");
      setQuestionText(""); // Clear the input field
    } else {
      setMessage("Failed to post question");
    }
  } catch (error) {
    console.error("Error posting question:", error);
  }
};

  const handlePostQuestion = async () => {
    try {
      if (!questionText.trim()) {
        // Check if the question text is empty or only contains whitespace
        return;
      }

      // Send a POST request to your server to post the question
      const response = await axios.post("http://localhost:9000/post-question", {
        text: questionText,
      });

      // Check the response and handle it accordingly
      if (response.status === 201) {
        // Question posted successfully
        console.log('Question posted:', response.data);

        // Clear the question text
        setQuestionText('');
      } else {
        // Handle error responses from the server
        console.error('Failed to post question:', response.data);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error posting question:', error);
    }
  };

  return (
    <div className="post-question">
      <h2>Post a Question</h2>
      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Type your question here..."
        rows="4"
      ></textarea>
      <button onClick={handlePostQuestion}>Post</button>
    </div>
  );
}

export default PostQuestion;


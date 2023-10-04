import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import PostQuestion from "./components/post-question/post-question"; // Import PostQuestion
import Login from "./components/login/login";
import Register from "./components/register/register";


function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={user && user._id ? <Navigate to="/" /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={user && user._id ? <Navigate to="/" /> : <Register />} />

          {/* Route for posting questions */}
          <Route path="/post-question" element={<PostQuestion />} />

          <Route
            path="/"
            element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

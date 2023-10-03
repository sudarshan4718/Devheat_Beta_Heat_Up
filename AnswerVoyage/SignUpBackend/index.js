import './App.css';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Homepage from "./components/homepage/homepage" // Import Homepage
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={user && user._id ? <Navigate to='/' /> : <Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={user && user._id ? <Navigate to='/' /> : <Register />} />
          <Route path='/' element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

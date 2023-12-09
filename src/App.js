// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EmployeeListPage from './pages/EmployeeListPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  const handleLogin = (email, password) => {
    // Perform authentication logic here (compare with actual credentials)
    // For now, simulate login based on some condition (e.g., hardcoded credentials)
    if (email === 'example@email.com' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <HomePage /> : <LoginPage handleLogin={handleLogin} />} />
        <Route path="/employee-list" element={<EmployeeListPage />} />
      </Routes>
    </Router>
  );
};

export default App;

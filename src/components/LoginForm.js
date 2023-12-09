// components/LoginForm.js
import React, { useState } from 'react';
import '../style/LoginPageStyle.css';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="login-page-container">
    <form onSubmit={handleSubmit}>
         <div className="image-container"></div>
         <div className="text-image">We are Electric</div>
      <input
        type="email"
        placeholder="Email"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className='login-button'></button>
      <div className="login-text">Login</div>
      <button className='forgot-password'>Forgot Password</button>

    </form>
    </div>
  );
};

export default LoginForm;

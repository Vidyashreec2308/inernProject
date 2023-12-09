import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ handleLogin }) => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

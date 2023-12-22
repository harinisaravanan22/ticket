// LoginPage.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle login, such as sending a request to your backend
    console.log('Login data:', { email, password });
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className='tictok'>
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{marginTop:"50px"}}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
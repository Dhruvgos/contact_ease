import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the user is already authenticated.
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const checkLogin = async () => {
    try {
      const response = await fetch('https://contacteasebackend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('token', result.token);
        navigate('/');
      } else {
        setError('Invalid email or password'); // Display an error message.
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your e-mail"
          onChange={onChange}
        />
      </div>
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="form-control"
        aria-describedby="passwordHelpBlock"
        onChange={onChange}
      />
      <div id="passwordHelpBlock" className="form-text">
        Your password must not contain spaces, special characters, or emoji.
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button onClick={checkLogin} className="btn btn-primary my-1">
        <svg width="20px" height="20px" viewBox="4 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/> <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
        Sign In
      </button>
    </div>
  );
}

export default Login;

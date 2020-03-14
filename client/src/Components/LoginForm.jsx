import React, { useState } from 'react';
//import styled from 'styled-components';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async e => {
    e.preventDefault();
    //fetch request to /auth/user/login goes here
    const response = await fetch('/auth/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem('loginToekn', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.user));
      });
  };
  return (
    <>
      <form onSubmit={loginUser}>
        <ul>
          <li>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit">Login</button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListWrap, Form, ModalWrap, BtnWrap } from './UI/index';
import CreateUser from './CreateUser';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();

  const loginUser = async e => {
    e.preventDefault();
    //fetch request to /auth/user/login goes here
    const response = await fetch('/auth/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const errorCodes = [400, 401, 500];
    if (errorCodes.includes(response.status)) {
      const errorData = await response.json();
      console.log(errorData);
    }
    if (response.status === 200) {
      const data = await response.json();
      localStorage.clear();
      localStorage.setItem('loginToken', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.user));

      push('/');
    }
  };
  return (
    <>
      <ModalWrap>
        <Form onSubmit={loginUser}>
          <ListWrap>
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
            <BtnWrap>
              <button type="submit">Login</button>
              <CreateUser></CreateUser>
            </BtnWrap>
          </ListWrap>
        </Form>
      </ModalWrap>
    </>
  );
};

export default LoginForm;

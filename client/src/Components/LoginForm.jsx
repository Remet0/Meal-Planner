import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ListWrap,
  ModalWrap,
  Form,
  FormBtn,
  FieldStyle,
  FormList,
  BtnWrap
} from './UI/index';
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
            <FormList>
              <label htmlFor="username">Username:</label>
              <FieldStyle
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></FieldStyle>
            </FormList>
            <FormList>
              <label htmlFor="password">Password:</label>
              <FieldStyle
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></FieldStyle>
            </FormList>
            <BtnWrap>
              <FormBtn type="submit">Login</FormBtn>
              <CreateUser></CreateUser>
            </BtnWrap>
          </ListWrap>
        </Form>
      </ModalWrap>
    </>
  );
};

export default LoginForm;

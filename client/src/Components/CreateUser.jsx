import React, { useState } from 'react';
import styled from 'styled-components';

const CreateUser = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const admin = false;

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const createUser = async e => {
    e.preventDefault();
    const response = await fetch('/auth/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username, password, email, admin })
    });

    const errorCodes = [400];
    if (errorCodes.includes(response.status)) {
      const errorData = await response.json();
      console.log(errorData);
    }
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      handleClose();
    }
  };

  if (!show) {
    return (
      <>
        <button onClick={handleOpen}>Sign Up</button>
      </>
    );
  }

  return (
    <>
      <ModalWrap>
        <Form onSubmit={createUser}>
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
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="JohnDoe@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
              <button type="submit">Register</button>
              <button onClick={handleClose}> Cancel</button>
            </li>
          </ListWrap>
        </Form>
      </ModalWrap>
    </>
  );
};

export default CreateUser;

const ModalWrap = styled.section`
  margin-top: 50px;
  margin-left: 50px;
  height: 500px;
  width: 90vw;
  background-color: white;
  box-shadow: 0px 0px 15px;
  z-index: 999;
  position: fixed;
  top: 50px;
  left: 0;
`;

const Form = styled.form`
  display: flex;
`;

const ListWrap = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

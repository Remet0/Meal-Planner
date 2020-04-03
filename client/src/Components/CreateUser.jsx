import React, { useState } from 'react';
import styled from 'styled-components';

const CreateUser = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const createUser = e => {
    e.preventDefault();

    handleClose();
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
        <form onSubmit={createUser}>
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
            </li>
          </ul>
        </form>
        <button onClick={handleClose}> Cancel</button>
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

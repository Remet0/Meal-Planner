import React, { useState } from 'react';
import { ListWrap, ModalWrap, Form, BtnWrap } from './UI/index';

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
            <BtnWrap>
              <button type="submit">Register</button>
              <button onClick={handleClose}> Cancel</button>
            </BtnWrap>
          </ListWrap>
        </Form>
      </ModalWrap>
    </>
  );
};

export default CreateUser;

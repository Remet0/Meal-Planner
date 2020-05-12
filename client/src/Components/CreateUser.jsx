import React, { useState } from 'react';
import {
  ListWrap,
  ModalWrap,
  Form,
  FormBtn,
  FieldStyle,
  FormList,
  BtnWrap
} from './UI/index';

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
        <FormBtn onClick={handleOpen}>Sign Up</FormBtn>
      </>
    );
  }

  return (
    <>
      <ModalWrap>
        <Form onSubmit={createUser}>
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
              <label htmlFor="email">Email:</label>
              <FieldStyle
                type="text"
                name="email"
                placeholder="JohnDoe@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
              <FormBtn type="submit">Register</FormBtn>
              <FormBtn onClick={handleClose}> Cancel</FormBtn>
            </BtnWrap>
          </ListWrap>
        </Form>
      </ModalWrap>
    </>
  );
};

export default CreateUser;

import React from 'react';
import { NavBar, LoginForm } from '../Components/index';
import { Body } from '../Components/UI/Body';
const LoginPage = () => {
  return (
    <>
      <Body>
        <NavBar></NavBar>
        <LoginForm></LoginForm>
      </Body>
    </>
  );
};

export default LoginPage;

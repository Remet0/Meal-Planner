import React from 'react';
import { NavBar, LoginForm, CreateUser } from '../Components/index';
const LoginPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <LoginForm></LoginForm>
      <CreateUser></CreateUser>
    </>
  );
};

export default LoginPage;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavBar } from '../Components/index';
import { verifyUser } from '../lib/index';

const UserPage = props => {
  const username = props.match.params.username;
  const token = localStorage.getItem('loginToken');
  useEffect(() => {
    verifyUser(username, token);
  });

  return (
    <>
      <Wrapper>
        <NavBar></NavBar>
        <h1>USER PAGE {props.match.params.username}</h1>
      </Wrapper>
    </>
  );
};

export default UserPage;

const Wrapper = styled.section`
  background-color: grey;
  height: 100%;
  width: 100%;
`;

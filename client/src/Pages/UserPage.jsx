import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../Components/index';

const UserPage = () => {
  return (
    <>
      <Wrapper>
        <NavBar></NavBar>
        <h1>USER PAGE</h1>
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

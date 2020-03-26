import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../Components/index';

const UserPage = props => {
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

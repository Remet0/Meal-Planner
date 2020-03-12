import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../Components/index';

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <NavBar></NavBar>
      </Wrapper>
    </>
  );
};

export default HomePage;

const Wrapper = styled.section`
  background-color: grey;
  height: 100%;
  width: 100%;
`;

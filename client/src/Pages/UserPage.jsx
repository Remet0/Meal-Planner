import React from 'react';
// import styled from 'styled-components';
import { NavBar, Profile } from '../Components/index';
import { Body } from '../Components/UI/Body';

const UserPage = props => {
  return (
    <>
      <Body>
        <NavBar></NavBar>
        <Profile></Profile>
        <h1>USER PAGE {props.match.params.username}</h1>
      </Body>
    </>
  );
};

export default UserPage;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserStatus from './userStatus';

const NavBar = () => {
  return (
    <NavWrapper>
      <Header>Meal Planner</Header>
      <List>
        <ListLink>
          <StyledLink to="/">Home</StyledLink>
        </ListLink>
        <ListLink>
          <UserStatus></UserStatus>
        </ListLink>
      </List>
      <NavAccent></NavAccent>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.section`
  display: flex;
  position: relative;
  height: 50px;
  background-color: #305a72;
`;

const NavAccent = styled.hr`
  margin: 0;
  position: absolute;
  bottom: 0;
  border: 1px solid white;
  width: 100vw;
  height: 0;
  box-shadow: 0px 1px 2px grey;
`;

const Header = styled.h1`
  position: absolute;
  left: 10px;
  top: 0px;
  margin-top: 10px;
  color: white;
`;

const List = styled.ul`
  list-style-type: none;
  position: absolute;
  right: 2em;
`;

const ListLink = styled.li`
  display: inline;
  margin-right: 2em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

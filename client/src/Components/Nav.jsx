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
          <Link to="/">Home</Link>
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
  background-color: rgb(31, 156, 252);
`;

const NavAccent = styled.hr`
  margin: 0;
  position: absolute;
  bottom: 0;
  border: 1px solid rgb(45, 115, 31);
  width: 100vw;
  height: 0;
  box-shadow: 0px 1px 2px grey;
`;

const Header = styled.h1`
  position: absolute;
  left: 10px;
  top: 0px;
  margin-top: 10px;
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

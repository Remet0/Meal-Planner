import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserStatus = () => {
  let userinfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <>
      {userinfo ? (
        <StyledLink to={`/user/${userinfo.username}`}>
          {userinfo.username}
        </StyledLink>
      ) : (
        <StyledLink to="/login">Login</StyledLink>
      )}
    </>
  );
};

export default UserStatus;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

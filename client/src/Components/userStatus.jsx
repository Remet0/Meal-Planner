import React from 'react';
import { Link } from 'react-router-dom';

const UserStatus = () => {
  let userinfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <>
      {userinfo ? (
        <Link to={`/user/${userinfo.username}`}>{userinfo.username}</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default UserStatus;

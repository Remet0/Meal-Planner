import React from 'react';

const UserStatus = () => {
  let userinfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <>
      {userinfo ? (
        <a href="/user">{userinfo.username}</a>
      ) : (
        <a href="/login">Login</a>
      )}
    </>
  );
};

export default UserStatus;

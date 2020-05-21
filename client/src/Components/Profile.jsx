import React, { useEffect, useState } from 'react';
import { EditUserModal } from './index';

const Profile = () => {
  //useEffect to run get request when page mounts.
  //use get request to user/profile/:username
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = localStorage.getItem('loginToken');

  const userCall = async () => {
    const response = await fetch(`/user/profile/${userInfo.username}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    let data = await response.json();
    setUserData(data);
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      userCall();
    }
  }, [loaded]);
  if (userData != null) {
    return (
      <>
        <EditUserModal></EditUserModal>
        <p>Hi {userData.username}</p>
      </>
    );
  }
  return (
    <>
      <p>Loading</p>
    </>
  );
};

export default Profile;

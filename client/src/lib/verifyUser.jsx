const verifyUser = async (username, token) => {
  const response = await fetch(`/user/${username}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status !== 200) {
    const error = await response.json();
    return console.log(error);
  }
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

export default verifyUser;

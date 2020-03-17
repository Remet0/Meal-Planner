const verifyUser = async (username, token) => {
  const response = await fetch(`/user/${username}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status !== 200) {
    const error = await response.json();
    console.log(error);
  }
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
  }
};

export default verifyUser;

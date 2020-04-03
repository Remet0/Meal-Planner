const verifyUser = async props => {
  const username = props.computedMatch.params.username;
  const token = localStorage.getItem('loginToken');
  const response = await fetch(`/user/${username}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status !== 200) {
    const error = await response.json();
    console.log(error);
    localStorage.clear();
    return false;
  }
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return true;
  }
};

export default verifyUser;

const CreateToken = require('./createToken');

module.exports = loginUser = async (req, res) => {
  let { username, password } = req.body;

  username = username.trim().toLowerCase();
  password = password.trim();

  if (!username) {
    res.status(400).send('no username found');
  }
};

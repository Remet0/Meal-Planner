const CreateToken = require('./createToken');

module.exports = loginUser = async (req, res) => {
  let { username, password } = req.body;

  username = username.trim().toLowerCase();
  password = password.trim();

  if (!username) {
    res.status(400).send('Username is missing');
  }
  if (!password) {
    res.status(400).send('Password is missing');
  }

  try {
    const user = await connection.query(
      `SELECT * FROM Users WHERE username = ${username}`,
      (err, rows) => {
        if (err) throw err;

        return rows;
      }
    );

    const match = false;
    if (username === user.username) {
      match = true;
    }
    if (!match) {
      return res.status(400).send('username or password are incorrect');
    }

    req.tokenString = CreateToken(user);
  } catch {
    return res.status(500).send('Error processing request');
  }
};

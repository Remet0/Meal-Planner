module.exports = (sequelize, type) => {
  const User = sequelize.define('Users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: type.STRING,
      allowNull: false
    },
    password: {
      type: type.STRING,
      allowNull: false
    },
    email: {
      type: type.STRING,
      allowNull: false
    },
    calories: {
      type: type.INTEGER,
      allowNull: true
    },
    protein: {
      type: type.INTEGER,
      allowNull: true
    },
    carbs: {
      type: type.INTEGER,
      allowNull: true
    },
    admin: {
      type: type.BOOLEAN,
      defaultValue: false
    }
  });

  return User;
};

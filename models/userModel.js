module.exports = (sequelize, type) => {
  return sequelize.define('Users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: type.STRING,
      allowNull: false
    },
    passwrod: {
      type: type.STRING,
      allowNull: false
    },
    email: {
      type: type.STRING,
      allowNull: false
    },
    calories: type.INTEGER,
    protein: type.INTEGER,
    carbs: type.INTEGER,
    admin: {
      type: type.BOOLEAN,
      defaultValue: false
    }
  });
};

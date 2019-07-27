'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    // associations can be defined here
  };
  return role;
};
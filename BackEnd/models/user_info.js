'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_info.init({
    first_name:DataTypes.STRING,
    last_name : DataTypes.STRING ,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    rolee:DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'user_info',
  });
  return user_info;
};
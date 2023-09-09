'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veterinarian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  veterinarian.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.DATE,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    bsc: DataTypes.STRING,
    universtiy: DataTypes.STRING,
    bscImage: DataTypes.STRING,
    exp: DataTypes.BOOLEAN,
    num_year_exp: DataTypes.INTEGER,
    details: DataTypes.STRING,
    personalImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'veterinarian',
  });
  return veterinarian;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class common_problems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  common_problems.init({
    title: DataTypes.STRING,
    disc: DataTypes.STRING,
    animal_type: DataTypes.STRING,
    publisher: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'common_problems',
  });
  return common_problems;
};
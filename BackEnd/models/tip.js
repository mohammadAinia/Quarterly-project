'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tip.init({
    animal_type: DataTypes.STRING,
    min_age: DataTypes.INTEGER,
    max_age: DataTypes.INTEGER,
    tip: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tip',
  });
  return tip;
};
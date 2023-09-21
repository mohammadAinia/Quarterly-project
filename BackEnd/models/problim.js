'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class problim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  problim.init({
    title: DataTypes.STRING,
    disc: DataTypes.STRING,
    publisher: DataTypes.STRING,
    animal_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'problim',
  });
  return problim;
};
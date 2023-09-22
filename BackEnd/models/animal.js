'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  animal.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    age: DataTypes.DATE,
    gender: DataTypes.STRING,
    food_type: DataTypes.STRING,
    place: DataTypes.STRING,
    owner: DataTypes.STRING,
    ownered: DataTypes.BOOLEAN,
    urlImage: DataTypes.STRING,
    Additional_details:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};
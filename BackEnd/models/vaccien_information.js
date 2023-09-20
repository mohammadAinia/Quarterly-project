'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccien_information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vaccien_information.init({
    name: DataTypes.STRING,
    duration_ef: DataTypes.INTEGER,
    recommended_age: DataTypes.INTEGER,
    number_of_repetition: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description:DataTypes.STRING,
    animmal_type:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'vaccien_information',
  });
  return vaccien_information;
};
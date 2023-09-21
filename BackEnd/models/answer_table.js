'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answer_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  answer_table.init({
    answer: DataTypes.STRING,
    id_problim: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'answer_table',
  });
  return answer_table;
};
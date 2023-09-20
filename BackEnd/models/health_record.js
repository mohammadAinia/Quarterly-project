'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class health_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  health_record.init({
    animal_id: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    high: DataTypes.INTEGER,
    health_stats: DataTypes.STRING,
    vaccien_record:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'health_record',
  });
  return health_record;
};
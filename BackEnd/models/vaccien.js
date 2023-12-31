'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vaccien.init({
    health_record_id: DataTypes.INTEGER,
    // duration_eff: DataTypes.DATE,
    animal_id: DataTypes.INTEGER,
    next_appointment: DataTypes.DATE,
    vacc_info_id:DataTypes.INTEGER,
    date_take_vac:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vaccien',
  });
  return vaccien;
};
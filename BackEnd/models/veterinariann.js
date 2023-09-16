'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veterinariann extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  veterinariann.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    bsc: DataTypes.STRING,
    university: DataTypes.STRING,
    bscImage: DataTypes.STRING,
    exp: DataTypes.BOOLEAN,
    num_year_exp: DataTypes.INTEGER,
    deatalis: DataTypes.STRING,
    personImage: DataTypes.STRING,
    url_bsc:DataTypes.VARCHAR,
    url_prev_imag:DataTypes.VARCHAR

  }, {
    sequelize,
    modelName: 'veterinariann',
  });
  return veterinariann;
};
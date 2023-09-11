'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veterinarianns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      bsc: {
        type: Sequelize.STRING
      },
      university: {
        type: Sequelize.STRING
      },
      bscImage: {
        type: Sequelize.STRING
      },
      exp: {
        type: Sequelize.BOOLEAN
      },
      num_year_exp: {
        type: Sequelize.INTEGER
      },
      deatalis: {
        type: Sequelize.STRING
      },
      personImage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('veterinarianns');
  }
};
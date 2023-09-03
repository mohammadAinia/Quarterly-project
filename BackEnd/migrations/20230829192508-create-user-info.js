'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports={
  async up(queryInterface,Sequelize) {
    await queryInterface.createTable('user_info',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,

      },
      password: {
        type: Sequelize.STRING,
        
      },
      phone: {
        type: Sequelize.INTEGER
      },
      rolee: {
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
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('user_infos');
  }
};
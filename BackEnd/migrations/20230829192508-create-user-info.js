'use strict';
const { isEmail }=require('validator');

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
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail,'Please enter a valid email']
      },
      password: {
        type: Sequelize.STRING,
        required: [true,'Please enter a password'],
        minlength: [6,'Minimum password length is 6 characters'],
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
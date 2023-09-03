'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a name of animal'],
      },
      type: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a type of animal '],
      },
      color: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a color of animal'],
      },
      age: {
        type: Sequelize.INTEGER,
        required: [true, 'Please enter a age of animal'],

      },
      gender: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a gender of animal'],

      },
      food_type: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a food_type of animal'],

      },
      place: {
        type: Sequelize.STRING,
        required: [true, 'Please enter a place of animal'],

      },
      owner: {
        type: Sequelize.STRING
      },
      ownered: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('animals');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports={
  async up(queryInterface,Sequelize) {
    await queryInterface.createTable('animals',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,

      },
      type: {
        type: Sequelize.STRING,

      },
      color: {
        type: Sequelize.STRING,

      },
      age: {
        type: Sequelize.INTEGER,


      },
      gender: {
        type: Sequelize.STRING,


      },
      food_type: {
        type: Sequelize.STRING,


      },
      place: {
        type: Sequelize.STRING,

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
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('animals');
  }
};
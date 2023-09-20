module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('health_records', 'vaccien_record', {
        type: Sequelize.INTEGER,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('health_records', 'vaccien_record')]);
  },
};
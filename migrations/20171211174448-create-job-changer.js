'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobChangers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      index: {
        type: Sequelize.INTEGER
      },
      jobId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jobs',
          key: 'id',
          as: 'jobId',
        },
      },
        jobchangerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Jobs',
            key: 'id',
            as: 'jobchangerId',
          },
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobChangers');
  }
};

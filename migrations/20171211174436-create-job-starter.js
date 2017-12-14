'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobStarters', {
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
        jobstarterId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Jobs',
            key: 'id',
            as: 'jobstarterId',
          },
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobStarters');
  }
};

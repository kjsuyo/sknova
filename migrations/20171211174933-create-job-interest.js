'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobInterests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.FLOAT
      },
      jobId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jobs',
          key: 'id',
          as: 'jobId',
        },
      },
      interestId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Interests',
          key: 'id',
          as: 'interestId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobInterests');
  }
};

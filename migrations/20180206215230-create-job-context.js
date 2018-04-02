'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobContexts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mean_value: {
        type: Sequelize.FLOAT
      },
      mean_se: {
        type: Sequelize.FLOAT
      },
      mean_lowerbound: {
        type: Sequelize.FLOAT
      },
      mean_upperbound: {
        type: Sequelize.FLOAT
      },
      cat1_value: {
        type: Sequelize.FLOAT
      },
      cat1_se: {
        type: Sequelize.FLOAT
      },
      cat1_lowerbound: {
        type: Sequelize.FLOAT
      },
      cat1_upperbound: {
        type: Sequelize.FLOAT
      },
      cat2_value: {
        type: Sequelize.FLOAT
      },
      cat2_se: {
        type: Sequelize.FLOAT
      },
      cat2_lowerbound: {
        type: Sequelize.FLOAT
      },
      cat2_upperbound: {
        type: Sequelize.FLOAT
      },
      cat3_value: {
        type: Sequelize.FLOAT
      },
      cat3_se: {
        type: Sequelize.FLOAT
      },
      cat3_lowerbound: {
        type: Sequelize.FLOAT
      },
      cat3_upperbound: {
        type: Sequelize.FLOAT
      },
      cat4_value: {
        type: Sequelize.FLOAT
      },
      cat4_se: {
        type: Sequelize.FLOAT
      },
      cat4_lowerbound: {
        type: Sequelize.FLOAT
      },
      cat4_upperbound: {
        type: Sequelize.FLOAT
      },
      cat5_value: {
        type: Sequelize.FLOAT
      },
      cat5_se: {
        type: Sequelize.FLOAT
      },
      cat5_lowerbound: {
        type: Sequelize.FLOAT
      },
      cat5_upperbound: {
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
      contextId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contexts',
          key: 'id',
          as: 'contextId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobContexts');
  }
};

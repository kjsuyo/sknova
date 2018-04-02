'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      im_value: {
        type: Sequelize.FLOAT
      },
      im_se: {
        type: Sequelize.FLOAT
      },
      im_lower: {
        type: Sequelize.FLOAT
      },
      im_upper: {
        type: Sequelize.FLOAT
      },
      lv_value: {
        type: Sequelize.FLOAT
      },
      lv_se: {
        type: Sequelize.FLOAT
      },
      lv_lower: {
        type: Sequelize.FLOAT
      },
      lv_upper: {
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
      activityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Activities',
          key: 'id',
          as: 'activityId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobActivities');
  }
};

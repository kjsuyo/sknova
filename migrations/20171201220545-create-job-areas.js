'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobAreas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      naics: {
        type: Sequelize.STRING
      },
      naics_title: {
        type: Sequelize.STRING
      },
      own_code: {
        type: Sequelize.STRING
      },
      tot_empl: {
        type: Sequelize.INTEGER
      },
      emp_prse: {
        type: Sequelize.FLOAT
      },
      jobs_1000: {
        type: Sequelize.FLOAT
      },
      loc_quotient: {
        type: Sequelize.FLOAT
      },
      pct_total: {
        type: Sequelize.FLOAT
      },
      h_mean: {
        type: Sequelize.FLOAT
      },
      a_mean: {
        type: Sequelize.FLOAT
      },
      mean_prse: {
        type: Sequelize.FLOAT
      },
      h_pct10: {
        type: Sequelize.FLOAT
      },
      h_pct25: {
        type: Sequelize.FLOAT
      },
      h_median: {
        type: Sequelize.FLOAT
      },
      h_pct75: {
        type: Sequelize.FLOAT
      },
      h_pct90: {
        type: Sequelize.FLOAT
      },
      a_pct10: {
        type: Sequelize.FLOAT
      },
      a_pct25: {
        type: Sequelize.FLOAT
      },
      a_median: {
        type: Sequelize.FLOAT
      },
      a_pct75: {
        type: Sequelize.FLOAT
      },
      a_pct90: {
        type: Sequelize.FLOAT
      },
      annual: {
        type: Sequelize.INTEGER
      },
      hourly: {
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
      areaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Areas',
          key: 'id',
          as: 'areaId',
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobAreas');
  }
};

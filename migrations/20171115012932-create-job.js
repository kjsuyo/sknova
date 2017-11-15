'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soc: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      segment: {
        type: Sequelize.STRING
      },
      jobtitle: {
        type: Sequelize.STRING
      },
      empl_2016: {
        type: Sequelize.FLOAT
      },
      empl_2026: {
        type: Sequelize.FLOAT
      },
      empl_change_num: {
        type: Sequelize.FLOAT
      },
      empl_change_pct: {
        type: Sequelize.FLOAT
      },
      self_empl_2016: {
        type: Sequelize.FLOAT
      },
      avg_annual_openings: {
        type: Sequelize.FLOAT
      },
      median_wage_2016: {
        type: Sequelize.FLOAT
      },
      work_exp: {
        type: Sequelize.FLOAT
      },
      otj_training: {
        type: Sequelize.FLOAT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};
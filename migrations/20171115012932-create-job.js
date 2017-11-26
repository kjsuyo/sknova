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
      category: {
        type: Sequelize.STRING
      },
      jobtitle: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
          as: 'categoryId',
        },
      },
      description: {
        type: Sequelize.STRING(1234)
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
      education: {
        type: Sequelize.STRING
      },
      work_exp: {
        type: Sequelize.STRING
      },
      otj_training: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Jobs');
  }
};

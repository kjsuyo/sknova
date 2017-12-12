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
      description: {
        type: Sequelize.STRING(1234)
      },
      empl_change_pct: {
        type: Sequelize.FLOAT
      },
      green_value: {
        type: Sequelize.STRING
      },
      zoneId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Zones',
          key: 'id',
          as: 'zoneId',
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
          as: 'categoryId',
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
    return queryInterface.dropTable('Jobs');
  }
};

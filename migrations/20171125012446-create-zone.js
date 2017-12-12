'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Zones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zone: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING(300)
      },
      education: {
        type: Sequelize.STRING
      },
      training: {
        type: Sequelize.STRING
      },
      examples: {
        type: Sequelize.STRING(300)
      },
      svp: {
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
    return queryInterface.dropTable('Zones');
  }
};

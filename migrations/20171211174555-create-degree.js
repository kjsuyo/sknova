'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Degrees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      onetid: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      scaleabbrev: {
        type: Sequelize.STRING
      },
      scalename: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING(300)
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
    return queryInterface.dropTable('Degrees');
  }
};

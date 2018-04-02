'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contexts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      scale: {
        type: Sequelize.STRING
      },
      cat1desc: {
        type: Sequelize.STRING
      },
      cat2desc: {
        type: Sequelize.STRING
      },
      cat3desc: {
        type: Sequelize.STRING
      },
      cat4desc: {
        type: Sequelize.STRING
      },
      cat5desc: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contexts');
  }
};

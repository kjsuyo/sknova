'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },

      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      industryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Industries',
          key: 'id',
          as: 'industryId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories');
  }
};

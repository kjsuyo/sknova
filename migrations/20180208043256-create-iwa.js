'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Iwas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      onetid: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Iwas');
  }
};

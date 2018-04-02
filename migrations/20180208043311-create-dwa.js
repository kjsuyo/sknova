'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dwas', {
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
      iwaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Iwas',
          key: 'id',
          as: 'iwaId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dwas');
  }
};

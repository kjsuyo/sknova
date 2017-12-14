'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.FLOAT
      },
      importance: {
        type: Sequelize.FLOAT
      },
      jobId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jobs',
          key: 'id',
          as: 'jobId',
        },
      },
      skillId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id',
          as: 'skillId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobSkills');
  }
};

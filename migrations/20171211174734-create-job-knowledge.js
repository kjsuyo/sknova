'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobKnowledges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      importance: {
        type: Sequelize.FLOAT
      },
      level: {
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
      knowledgeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Knowledge',
          key: 'id',
          as: 'knowledgeId',
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobKnowledges');
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Knowledge = sequelize.define('Knowledge', {
//    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING(300)
  },
  {
    timestamps: false
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Knowledge.associate = (models) => {
    Knowledge.belongsToMany(models.Job, {
      through: 'JobKnowledge',
      foreignKey: 'knowledgeId'
    });
};
  return Knowledge;
};

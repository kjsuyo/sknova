'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define('Skill', {
    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    Skill.associate = (models) => {
      Skill.belongsToMany(models.Job, {
        through: 'JobSkill',
      });
  };
  return Skill;
};

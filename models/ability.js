'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ability = sequelize.define('Ability', {
//    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING(310)
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
  Ability.associate = (models) => {
    Ability.belongsToMany(models.Job, {
      through: 'JobAbility',
      foreignKey: 'abilityId',
      foreignKeyConstraint: true
    });
};
  return Ability;
};

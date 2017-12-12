'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobAbility = sequelize.define('JobAbility', {
    importance: DataTypes.FLOAT,
    level: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobAbility;
};
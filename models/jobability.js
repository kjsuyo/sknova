'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobAbility = sequelize.define('JobAbility', {
    importance: DataTypes.FLOAT,
    level: DataTypes.FLOAT
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
  return JobAbility;
};

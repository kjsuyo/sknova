'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobSkill = sequelize.define('JobSkill', {
    level: DataTypes.FLOAT,
    importance: DataTypes.FLOAT
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
  return JobSkill;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobKnowledge = sequelize.define('JobKnowledge', {
    importance: DataTypes.FLOAT,
    level: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobKnowledge;
};
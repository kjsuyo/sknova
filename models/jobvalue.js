'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobValue = sequelize.define('JobValue', {
    value: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobValue;
};
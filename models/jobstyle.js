'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobStyle = sequelize.define('JobStyle', {
    value: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobStyle;
};
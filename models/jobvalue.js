'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobValue = sequelize.define('JobValue', {
    value: DataTypes.FLOAT
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
  return JobValue;
};

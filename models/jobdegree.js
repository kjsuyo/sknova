'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobDegree = sequelize.define('JobDegree', {
    value: DataTypes.FLOAT,
//    stdev: DataTypes.FLOAT,
//    lowerbound: DataTypes.FLOAT,
//    upperbound: DataTypes.FLOAT
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
  return JobDegree;
};

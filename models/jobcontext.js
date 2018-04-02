'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobContext = sequelize.define('JobContext', {
    mean_value: DataTypes.FLOAT,
    mean_se: DataTypes.FLOAT,
    mean_lowerbound: DataTypes.FLOAT,
    mean_upperbound: DataTypes.FLOAT,
    cat1_value: DataTypes.FLOAT,
    cat1_se: DataTypes.FLOAT,
    cat1_lowerbound: DataTypes.FLOAT,
    cat1_upperbound: DataTypes.FLOAT,
    cat2_value: DataTypes.FLOAT,
    cat2_se: DataTypes.FLOAT,
    cat2_lowerbound: DataTypes.FLOAT,
    cat2_upperbound: DataTypes.FLOAT,
    cat3_value: DataTypes.FLOAT,
    cat3_se: DataTypes.FLOAT,
    cat3_lowerbound: DataTypes.FLOAT,
    cat3_upperbound: DataTypes.FLOAT,
    cat4_value: DataTypes.FLOAT,
    cat4_se: DataTypes.FLOAT,
    cat4_lowerbound: DataTypes.FLOAT,
    cat4_upperbound: DataTypes.FLOAT,
    cat5_value: DataTypes.FLOAT,
    cat5_se: DataTypes.FLOAT,
    cat5_lowerbound: DataTypes.FLOAT,
    cat5_upperbound: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobContext;
};

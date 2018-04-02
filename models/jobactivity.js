'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobActivity = sequelize.define('JobActivity', {
    im_value: DataTypes.FLOAT,
    im_se: DataTypes.FLOAT,
    im_lower: DataTypes.FLOAT,
    im_upper: DataTypes.FLOAT,
    lv_value: DataTypes.FLOAT,
    lv_se: DataTypes.FLOAT,
    lv_lower: DataTypes.FLOAT,
    lv_upper: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobActivity;
};

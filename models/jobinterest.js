'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobInterests = sequelize.define('JobInterest', {
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
  return JobInterests;
};

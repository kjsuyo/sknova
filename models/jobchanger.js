'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobChanger = sequelize.define('JobChanger', {
    index: DataTypes.INTEGER
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
  return JobChanger;
};

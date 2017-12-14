'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobStarter = sequelize.define('JobStarter', {
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
  return JobStarter;
};

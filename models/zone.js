'use strict';
module.exports = (sequelize, DataTypes) => {
  var Zone = sequelize.define('Zone', {
    zone: DataTypes.INTEGER,
    name: DataTypes.STRING,
    experience: DataTypes.STRING,
    education: DataTypes.STRING,
    training: DataTypes.STRING,
    examples: DataTypes.STRING,
    svp: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Zone.associate = (models) => {

  };
  return Zone;
};

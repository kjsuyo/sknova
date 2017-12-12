'use strict';
module.exports = (sequelize, DataTypes) => {
  var Samplename = sequelize.define('Samplename', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Samplename.associate = (models) => {
    Samplename.belongsTo(models.Job, {
      foreignKey: 'jobId',
    });
};
  return Samplename;
};

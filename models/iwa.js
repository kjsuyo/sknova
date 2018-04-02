'use strict';
module.exports = (sequelize, DataTypes) => {
  var Iwa = sequelize.define('Iwa', {
    onetid: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Iwa.associate = (models) => {
  Iwa.belongsTo(models.Activity, {
    foreignKey: 'activityId',
  });
};
Iwa.associate = (models) => {
  Iwa.hasMany(models.Dwa, {
    foreignKey: 'iwaId',
    as: 'dwas',
    foreignKeyConstraint: true
  });
};
  return Iwa;
};

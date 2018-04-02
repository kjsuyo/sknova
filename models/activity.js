'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    onet_id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Activity.associate = (models) => {
    Activity.belongsToMany(models.Job, {
      through: 'JobActivity',
      foreignKey: 'activityId',
      foreignKeyConstraint: true
    });
};
  return Activity;
};

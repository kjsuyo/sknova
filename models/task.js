'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
//    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    green_value: DataTypes.STRING,
},
{
  timestamps: false
});
  Task.associate = (models) => {
    Task.belongsTo(models.Job, {
      foreignKey: 'jobId',
    });
};
  return Task;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Context = sequelize.define('Context', {
    name: DataTypes.STRING,
    scale: DataTypes.STRING,
    cat1desc: DataTypes.STRING,
    cat2desc: DataTypes.STRING,
    cat3desc: DataTypes.STRING,
    cat4desc: DataTypes.STRING,
    cat5desc: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Context.associate = (models) => {
    Context.belongsToMany(models.Job, {
      through: 'JobContext',
      foreignKey: 'contextId',
      foreignKeyConstraint: true
    });
};
  return Context;
};

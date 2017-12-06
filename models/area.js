'use strict';
module.exports = (sequelize, DataTypes) => {
  var Area = sequelize.define('Area', {
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Area.associate = (models) => {
    Area.belongsToMany(models.Job, {
      through: 'JobArea',
    });
  };
  return Area;
};

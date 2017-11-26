'use strict';
module.exports = (sequelize, DataTypes) => {
  var Industry = sequelize.define('Industry', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
});

  Industry.associate = (models) => {
    Industry.hasMany(models.Category, {
      foreignKey: 'industryId',
      as: 'categories',
    });
  };
  return Industry;
};

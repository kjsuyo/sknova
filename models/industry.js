'use strict';
module.exports = (sequelize, DataTypes) => {
  var Industry = sequelize.define('Industry', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
},
{
  timestamps: false
});

  Industry.associate = (models) => {
    Industry.hasMany(models.Category, {
      foreignKey: 'industryId',
      as: 'categories',
      foreignKeyConstraint: true
    });
  };
  return Industry;
};

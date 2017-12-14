'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    industry: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
},
{
  timestamps: false
});
  Category.associate = (models) => {
  Category.belongsTo(models.Industry, {
    foreignKey: 'industryId',
  });
};
Category.associate = (models) => {
  Category.hasMany(models.Job, {
    foreignKey: 'categoryId',
    as: 'jobs',
    foreignKeyConstraint: true
  });
};
  return Category;
};

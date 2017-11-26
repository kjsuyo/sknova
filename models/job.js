'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    soc: DataTypes.STRING,
    industry: DataTypes.STRING,
    sector: DataTypes.STRING,
    segment: DataTypes.STRING,
    category: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    description: DataTypes.STRING(1234),
    empl_2016: DataTypes.FLOAT,
    empl_2026: DataTypes.FLOAT,
    empl_change_num: DataTypes.FLOAT,
    empl_change_pct: DataTypes.FLOAT,
    self_empl_2016: DataTypes.FLOAT,
    avg_annual_openings: DataTypes.FLOAT,
    median_wage_2016: DataTypes.FLOAT,
    education: DataTypes.STRING,
    work_exp: DataTypes.STRING,
    otj_training: DataTypes.STRING
});
  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
};
  return Job;
};

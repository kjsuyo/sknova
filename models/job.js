'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    soc: DataTypes.STRING,
    industry: DataTypes.STRING,
    sector: DataTypes.STRING,
    segment: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    empl_2016: DataTypes.FLOAT,
    empl_2026: DataTypes.FLOAT,
    empl_change_num: DataTypes.FLOAT,
    empl_change_pct: DataTypes.FLOAT,
    self_empl_2016: DataTypes.FLOAT,
    avg_annual_openings: DataTypes.FLOAT,
    median_wage_2016: DataTypes.FLOAT,
    work_exp: DataTypes.FLOAT,
    otj_training: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Job;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobAreas = sequelize.define('JobArea', {
    area: DataTypes.INTEGER,
    naics: DataTypes.STRING,
    naics_title: DataTypes.STRING,
    own_code: DataTypes.STRING,
    tot_empl: DataTypes.INTEGER,
    emp_prse: DataTypes.FLOAT,
    jobs_1000: DataTypes.FLOAT,
    loc_quotient: DataTypes.FLOAT,
    pct_total: DataTypes.FLOAT,
    h_mean: DataTypes.FLOAT,
    a_mean: DataTypes.FLOAT,
    mean_prse: DataTypes.FLOAT,
    h_pct10: DataTypes.FLOAT,
    h_pct25: DataTypes.FLOAT,
    h_median: DataTypes.FLOAT,
    h_pct75: DataTypes.FLOAT,
    h_pct90: DataTypes.FLOAT,
    a_pct10: DataTypes.FLOAT,
    a_pct25: DataTypes.FLOAT,
    a_median: DataTypes.FLOAT,
    a_pct75: DataTypes.FLOAT,
    a_pct90: DataTypes.FLOAT,
    annual: DataTypes.INTEGER,
    hourly: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return JobAreas;
};

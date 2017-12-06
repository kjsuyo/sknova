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
    empl_change_pct: DataTypes.FLOAT,
});


  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
    Job.hasMany(models.Task, {
      foreignKey: 'jobId',
      as: 'tasks',
    });
    Job.belongsToMany(models.Area, {
      through: 'JobArea',
    });
};
  return Job;
};

/*

  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
};

Job.associate = (models) => {
  Job.hasMany(models.Task, {
    foreignKey: 'jobId',
    as: 'tasks',
  });
};


Job.associate = (models) => {
  Job.belongsToMany(models.Area, {
    through: 'JobArea',
  });
};
  return Job;
};
*/

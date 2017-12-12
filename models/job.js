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
    green_value: DataTypes.STRING,
});

  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
    Job.belongsTo(models.Zone, {
      foreignKey: 'zoneId',
    });
    Job.hasMany(models.Task, {
      foreignKey: 'jobId',
      as: 'tasks',
    });
    Job.belongsToMany(models.Area, {
      through: 'JobArea',
      foreignKey: 'jobId'
    });
    Job.belongsToMany(models.Job, {
      as: 'jobstarters',
      through: 'JobStarter',
      foreignKey: 'jobId',
      otherKey: 'jobstarterId'
    });
    Job.belongsToMany(models.Job, {
      as: 'jobchangers',
      through: 'JobChanger',
      foreignKey: 'jobId',
      otherKey: 'jobchangerId'
    });

//haven't done below this

    Job.belongsToMany(models.Degree, {
      through: 'JobDegree',
    });
    Job.belongsToMany(models.Knowledge, {
      through: 'JobKnowledge',
    });
    Job.belongsToMany(models.Skill, {
      through: 'JobSkill',
    });
    Job.belongsToMany(models.Interest, {
      through: 'JobInterest',
    });
    Job.belongsToMany(models.Ability, {
      through: 'JobAbility',
    });
    Job.belongsToMany(models.Value, {
      through: 'JobValue',
    });
    Job.belongsToMany(models.Style, {
      through: 'JobStyle',
    });
};
  return Job;
};

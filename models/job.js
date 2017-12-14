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
},
{
  timestamps: false
});

  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      foreignKeyConstraint: true
    });
    Job.belongsTo(models.Zone, {
      foreignKey: 'zoneId',
      as: 'zone',
      foreignKeyConstraint: true
    });
    Job.hasMany(models.Task, {
      foreignKey: 'jobId',
      as: 'tasks',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Area, {
      through: 'JobArea',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Job, {
      as: 'jobstarters',
      through: 'JobStarter',
      foreignKey: 'jobId',
      otherKey: 'jobstarterId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Job, {
      as: 'jobchangers',
      through: 'JobChanger',
      foreignKey: 'jobId',
      otherKey: 'jobchangerId',
      foreignKeyConstraint: true
    });


    Job.belongsToMany(models.Degree, {
      through: 'JobDegree',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Knowledge, {
      through: 'JobKnowledge',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Skill, {
      through: 'JobSkill',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Interest, {
      through: 'JobInterest',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Ability, {
      through: 'JobAbility',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Value, {
      through: 'JobValue',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
    Job.belongsToMany(models.Style, {
      through: 'JobStyle',
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
};
  return Job;
};

var models  = require('../models');
var express = require('express');
var router  = express.Router();
var numeral = require('numeral');

const Job = require('../models').Job;
const Task = require('../models').Task;
const Area = require('../models').Area;
const Zone = require('../models').Zone;
const JobChanger = require('../models').JobChanger;
const JobStarter = require('../models').JobStarter;

module.exports = {

  index(req, res) {
    res.render('index', {
      title: 'Homepage'
    });
  },

  list(req, res) {
    models.Job.findAll({
      include: [{
        model: Task,
        as: 'tasks',
      }]
    })
    .then(function(jobs) {
      res.render('joblisting', {
        title: 'Job Listing',
        jobs: jobs,
      });
    });
  },

  tasklist(req, res) {
    models.Task.findAll()
    .then(function(tasks) {
      res.render('joblisting', {
        title: 'Task Listing',
        tasks: tasks,
      });
    });
  },

  retrieve(req, res) {
    if (!req.query.area)
      {
        var queryAreaId = '99'
      } else{
        var queryAreaId = req.query.area
      };

      return Job
      .findById(req.params.jobId, {
        include: [
          {
            model: Task,
            as: 'tasks',
            limit: 10,
          },
          {
            model: Zone,
            otherKey: 'zoneId'
            },
          {
          model: Area,
         through: { attributes: ['a_mean'] },
          where: {'code': queryAreaId},
        },
          {
          model: Job,
          as: 'jobchangers',
          through: {
            model: JobChanger,
            attributes: []
          },
          foreignKey: 'jobId',
          otherKey: 'jobchangerId'
        },
          {
          model: Job,
          as: 'jobstarters',
          through: {
            model: JobStarter,
            attributes: []
          },
          foreignKey: 'jobId',
          otherKey: 'jobstarterId'
        }
      ]
      })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).render('jobdetail', {
          title: 'Job Detail Page',
          job: job,
          areas: job.areas,
          zone: job.zone,
          jobtitle: job.jobtitle,
          industry: job.industry,
          description: job.description,
          tasks: job.tasks,
          empl_change_pct: job.empl_change_pct,
          changers: job.jobchangers,
          starters: job.jobstarters,
          numeral: numeral
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

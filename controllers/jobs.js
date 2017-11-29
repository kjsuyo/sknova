var models  = require('../models');
var express = require('express');
var router  = express.Router();
var numeral = require('numeral');

const Job = require('../models').Job;
const Task = require('../models').Task;

module.exports = {

  index(req, res) {
    res.render('index', {
      title: 'Homepage'
    });
  },

  list(req, res) {
    models.Job.findAll().then(function(jobs) {
      res.render('joblisting', {
        title: 'Job Listing',
        jobs: jobs,
        numeral: numeral
      });
    });
  },

  retrieve(req, res) {
    return Job
      .findById(req.params.id, {
        include: [{
          model: Task,
          as: 'tasks',
        }],
      })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).render('jobdetail', {
          title: 'Job Detail Page',
          jobtitle: job.jobtitle,
          industry: job.industry,
          description: job.description,
          tasks: job.tasks,
          median_wage_2016: job.median_wage_2016,
          empl_change_pct: job.empl_change_pct,
          numeral: numeral
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

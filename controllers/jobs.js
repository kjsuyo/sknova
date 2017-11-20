var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Job = require('../models').Job;

module.exports = {

  index(req, res) {
    res.render('index', {
      title: 'Homepage'
    });
  },

  list(req, res) {
    models.Job.findAll().then(function(jobs) {
      res.render('industry', {
        title: 'Job Listing',
        jobs: jobs
      });
    });
  },

  sublist(req, res) {
    let industry = 'technology';
    models.Job.findAll({
      where: {industry: industry}
    }).then(function(jobs) {
      res.render('industry', {
        title: 'Job Listing',
        jobs: jobs
      });
    });
  },


/*  list(req, res) {
    return Job
      .all()
      .then(jobs => res.status(200).send(jobs))
      .catch(error => res.status(400).send(error));
  },
  */

  retrieve(req, res) {
    return Job
      .findById(req.params.id)
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).render('jobdetail', {
          title: 'Job Detail Page',
          jobtitle: job.jobtitle,
          industry: job.industry
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

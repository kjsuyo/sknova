var models  = require('../models/index');
var express = require('express');
var router  = express.Router();

const jobsController = require('../controllers').jobs;



module.exports = (app) => {

  app.get('/', jobsController.index);

  app.get('/jobs', jobsController.list);
  app.get('/jobs/:id', jobsController.retrieve);

  app.get('/sublist', jobsController.sublist);

  /*app.get('/industry', function(req, res) {
    models.Job.findAll().then(function(jobs) {
      res.render('industry', {
        title: 'Job listing page',
        jobs: jobs
      });
    });
  });
  */
};

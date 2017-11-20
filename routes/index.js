var models  = require('../models/index');
var express = require('express');
var router  = express.Router();

//router.get('/controllers', jobs_controller.index);

const jobsController = require('../controllers').jobs;



module.exports = (app) => {

  app.get('/', jobsController.index);

  app.get('/industry', function(req, res) {
    models.Job.findAll().then(function(jobs) {
      res.render('industry', {
        title: 'Skillterrier',
        jobs: jobs
      });
    });
  });

  app.get('/jobs', jobsController.list);
  app.get('/jobs/:id', jobsController.retrieve);
};

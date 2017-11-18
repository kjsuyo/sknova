var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {
  models.Job.findAll().then(function(jobs) {
    res.render('index', {
      title: 'Skillterrer',
      jobs: jobs
    });
  });
});

router.get('/industry', function(req, res) {
  models.Job.findAll().then(function(jobs) {
    res.render('industry', {
      title: 'Skillterrier',
      jobs: jobs
    });
  });
});




module.exports = router;

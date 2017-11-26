var models  = require('../models/index');
var express = require('express');
var router  = express.Router();

const jobsController = require('../controllers').jobs;
const catController = require('../controllers').categories;
const indController = require('../controllers').industries;



module.exports = (app) => {

  app.get('/', jobsController.index);

  app.get('/ind', indController.list);
  app.get('/ind/:industryId', indController.retrieve);

  app.get('/ind/:industryId/cat', catController.list);
  app.get('/ind/:industryId/cat/:categoryId', catController.retrieve);

  app.get('/ind/:industryId/cat/:categoryId/job', jobsController.list);
  app.get('/ind/:industryId/cat/:categoryId/job/:id', jobsController.retrieve);

};

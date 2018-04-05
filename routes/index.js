var models  = require('../models/index');
var express = require('express');
var router  = express.Router();

const areasController = require('../controllers').areas;
const algoController = require('../controllers/algorithm');
const indController = require('../controllers').industries;
const catController = require('../controllers').categories;
const jobsController = require('../controllers').jobs;

module.exports = (app) => {

  app.get('/', areasController.index);

  app.get('/about', (req, res) => res.render('about'));
  app.get('/contact', (req, res) => res.render('contact'));

  app.get('/ind', indController.list);
  app.get('/ind/:industryId', indController.retrieve);

  app.get('/ind/:industryId/cat', catController.list);
  app.get('/ind/:industryId/cat/:categoryId', catController.retrieve);

//  app.get('/ind/:industryId/cat/:categoryId/job', jobsController.list);
  app.get('/ind/:industryId/cat/:categoryId/job/:jobId', jobsController.retrieve);

  app.get('/quiz', (req, res) => res.render('quiz'));

  app.get('/algorithm', algoController.run);

};

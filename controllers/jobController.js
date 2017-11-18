var models  = require('../models');
var express = require('express');
var router  = express.Router();

var async = require('async');

module.exports = {
  list(req, res) {
    return Job
      .findAll({
        include: [{
          model: Job,
          as: 'Jobs',
        }],
      })
      .then((jobs) => res.status(200).send(jobs))
      .catch((error) => res.status(400).send(error));
  },

};

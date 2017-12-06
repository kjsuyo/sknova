var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Area = require('../models').Area;

module.exports = {

  index(req, res) {
    models.Area.findAll({
      where: {
        type: 'State'
      }
    }).then(function(areas) {
      res.render('index', {
        title: 'SkillTerrier',
        areas: areas
      });
    }).catch(error => res.status(400).send(error));
  }
};

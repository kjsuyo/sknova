var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Industry = require('../models').Industry;
const Category = require('../models').Category;

module.exports = {

  list(req, res) {
    models.Industry.findAll().then(function(industries) {
      res.render('industry', {
        title: 'Industry Listing',
        industries: industries
      });
    });
  },

  retrieve(req, res) {
    return Industry
      .findById(req.params.industryId, {
        include: [{
          model: Category,
          as: 'categories',
        }],
      })
      .then(industry => {
        if (!industry) {
          return res.status(404).send({
            message: 'Industry Not Found',
          });
        }
        return res.status(200).render('inddetail', {
          title: 'Industry Detail Page',
          name: industry.name,
          id: industry.id,
          description: industry.description,
          categories: industry.categories
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

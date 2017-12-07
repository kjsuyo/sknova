var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Industry = require('../models').Industry;
const Category = require('../models').Category;

module.exports = {

  list(req, res) {
    models.Industry.findAll().then(function(industries) {
      if (!req.query.area)
        {
          var queryAreaId = '99'
        } else{
          var queryAreaId = req.query.area
        };

      res.render('industry', {
        title: 'Industry Listing',
        industries: industries,
        queryAreaId: queryAreaId
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
        if (!req.query.area)
          {
            var queryAreaId = '99'
          } else{
            var queryAreaId = req.query.area
          };
        if (!industry) {
          return res.status(404).send({
            message: 'Industry Not Found',
          });
        }
        return res.status(200).render('inddetail', {
          title: 'Industry Detail Page',
          queryAreaId: queryAreaId,
          name: industry.name,
          id: industry.id,
          description: industry.description,
          categories: industry.categories,
          queryAreaId: queryAreaId
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

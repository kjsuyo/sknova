var models  = require('../models');
var express = require('express');
var router  = express.Router();
var numeral = require('numeral');

const Industry = require('../models').Industry;
const Category = require('../models').Category;
const Job = require('../models').Job;
const JobArea = require('../models').JobArea;
const Area = require('../models').Area;

module.exports = {

  list(req, res) {
    models.Category.findAll().then(function(categories) {
      res.render('category', {
        title: 'Category Listing',
        categories: categories
      });
    });
  },

  retrieve(req, res) {


    if (!req.query.area)
      {
        var queryAreaId = '99'
      } else{
        var queryAreaId = req.query.area
      };

    return Category
      .findById(req.params.categoryId, {
        include: [
          {
          model: Job,
          as: 'jobs',
            include: {
              model: Area,
          through: { attributes: ['a_mean'] },
          where: {'code': queryAreaId},
        },
      }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).render('catdetail', {
          title: 'Category Detail Page',
          name: category.name,
          id: category.id,
          description: category.description,
          jobs: category.jobs,
          numeral: numeral
        });
      })
      .catch(error => res.status(400).send(error));
    }


};

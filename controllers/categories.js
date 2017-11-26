var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Industry = require('../models').Industry;
const Category = require('../models').Category;
const Job = require('../models').Job;

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
    return Category
      .findById(req.params.categoryId, {
        include: [{
          model: Job,
          as: 'jobs',
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
          jobs: category.jobs
        });
      })
      .catch(error => res.status(400).send(error));
    }

};

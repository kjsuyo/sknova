var models  = require('../models');
var express = require('express');
var router  = express.Router();
var numeral = require('numeral');

const Job = require('../models').Job;
const Task = require('../models').Task;
const Area = require('../models').Area;
const Zone = require('../models').Zone;
const Style = require('../models').Style;
const Value = require('../models').Value;
const Skill = require('../models').Skill;
const Interest = require('../models').Interest;
const JobArea = require('../models').JobArea;
const JobChanger = require('../models').JobChanger;
const JobStarter = require('../models').JobStarter;
const JobStyle = require('../models').JobStyle;
const JobValue = require('../models').JobValue;
const JobInterest = require('../models').JobInterest;
const JobSkill = require('../models').JobSkill;
const JobAbility = require('../models').JobAbility;
const JobKnowledge = require('../models').JobKnowledge;


module.exports = {

  index(req, res) {
    res.render('index', {
      title: 'Homepage'
    });
  },



  list(req, res) {
    models.Job.findAll({
      include: [{
        model: Task,
        as: 'tasks',
      }]
    })
    .then(function(jobs) {
      res.render('joblisting', {
        title: 'Job Listing',
        jobs: jobs,
      });
    });
  },

  tasklist(req, res) {
    models.Task.findAll()
    .then(function(tasks) {
      res.render('joblisting', {
        title: 'Task Listing',
        tasks: tasks,
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

    job = Job.findById(req.params.jobId, {
      include: [
        {
            model: Area,
            through: {
              model: JobArea,
              attributes: ['a_mean']
            },
            where: {'code': queryAreaId},
        },
        {
        model: Job,
        as: 'jobchangers',
        attributes: ['id', 'jobtitle'],
        through: {
          model: JobChanger,
          attributes: []
        },
        foreignKey: 'jobId',
        otherKey: 'jobchangerId',
        required: true
      },
        {
        model: Job,
        as: 'jobstarters',
        attributes: ['id', 'jobtitle'],
        through: {
          model: JobStarter,
          attributes: []
        },
        foreignKey: 'jobId',
        otherKey: 'jobstarterId',
        required: true
      }
      ],
    }
    ).then(job => {

    zone = job.getZone();

    tasks = job.getTasks();

    styles = job.getStyles( {
      through: {
        model: JobStyle,
        attributes: ['value']
      },
    });

    skills = job.getSkills( {
      through: {
        model: JobSkill,
        attributes: ['importance', 'level']
      },
    });

    values = job.getValues( {
      through: {
        model: JobValue,
        attributes: ['value']
      },
    });

    interests = job.getInterests( {
      through: {
        model: JobInterest,
        attributes: ['value']
      },
    });


    abilities = job.getAbilities( {
      through: {
        model: JobAbility,
        attributes: ['importance', 'level']
      },
    });


    knowledges = job.getKnowledge( {
      through: {
        model: JobKnowledge,
        attributes: ['importance', 'level']
      },
    });

    Promise.all([job,zone,tasks,styles,skills,values,interests,abilities,knowledges]).then(results => {
      res.render('jobdetail', {
        title: 'Job Detail Page',
        job: results[0],
        zone: results[1],
        tasks: results[2],
        styles: results[3],
        skills: results[4],
        values: results[5],
        interests: results[6],
        abilities: results[7],
        knowledges: results[8],
        numeral:numeral
      });
    });
  });
  },

/*
  retrieve(req, res) {
    if (!req.query.area)
      {
        var queryAreaId = '99'
      } else{
        var queryAreaId = req.query.area
      };

      return Job
      .findById(req.params.jobId, {
        include: [
          {
                    model: Area,
                   through: {
                     model: JobArea,
                     attributes: ['a_mean']
                 },
                    where: {'code': queryAreaId},
                  },
          {
            model: Task,
            as: 'tasks',
            limit: 10,
            required: true
          },
          {
            model: Zone,
            as: 'zone',
            otherKey: 'zoneId',
            required: true
            },
            {
            model: Style,
            foreignKey: 'styleId',
            through: { attributes: ['value'] },
            required: true
            },
            {
            model: Skill,
            foreignKey: 'skillId',
            through: { attributes: ['importance', 'level'] },
            required: true
            },
            {
            model: Value,
            foreignKey: 'valueId',
            through: { attributes: ['value'] },
            required: true
            },
            {
            model: Interest,
            foreignKey: 'interestId',
            through: { attributes: ['value'] },
            required: true
            },

          {
          model: Job,
          as: 'jobchangers',
          attributes: ['id', 'jobtitle'],
          through: {
            model: JobChanger,
            attributes: []
          },
          foreignKey: 'jobId',
          otherKey: 'jobchangerId',
          required: true
        },
          {
          model: Job,
          as: 'jobstarters',
          attributes: ['id', 'jobtitle'],
          through: {
            model: JobStarter,
            attributes: []
          },
          foreignKey: 'jobId',
          otherKey: 'jobstarterId',
          required: true
        }
      ],
      order: [
        [ {model: Style}, {model: JobStyle}, 'value', 'DESC'],
        [ {model: Value}, {model: JobValue}, 'value', 'DESC'],
        [ {model: Interest}, {model: JobInterest}, 'value', 'DESC'],
     ],
      })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).render('jobdetail', {
          title: 'Job Detail Page',
          job: job,
          areas: job.areas,
          zone: job.zone,
          style: job.style,
          value: job.value,
          skill: job.skill,
          interest: job.interest,
          jobtitle: job.jobtitle,
          industry: job.industry,
          description: job.description,
          tasks: job.tasks,
          empl_change_pct: job.empl_change_pct,
          changers: job.jobchangers,
          starters: job.jobstarters,
          numeral: numeral
        });
      })
      .catch(error => res.status(400).send(error));
    }

    */
};

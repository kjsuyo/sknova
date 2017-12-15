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
const Ability = require('../models').Ability;
const Knowledge = require('../models').Knowledge;
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

    styles = Style.findAll( {
      include: [
        {
          model: Job,
          foreignKey: 'jobId',
          through: {
            model: JobStyle,
            joinTableAttributes: ['value'],
            attributes: ['id']
          },
          where: {'id': job.id},
          required: true
        },

      ],
      order: [
        [ { model: Job}, { model: JobStyle}, 'value', 'DESC' ],
      ],
      limit: 5,
    });

//    styles = job.getStyles( {
//      through: {
//        model: JobStyle
//      },
//    order: [
//       [ {model: JobStyle}, 'value', 'DESC']
//     ],
//    });

skills = Skill.findAll( {
  include: [
    {
      model: Job,
      foreignKey: 'jobId',
      through: {
        model: JobSkill,
        joinTableAttributes: ['importance', 'level'],
        attributes: ['id']
      },
      where: {'id': job.id},
      required: true
    },

  ],
  order: [
    [ { model: Job}, { model: JobSkill}, 'importance', 'DESC' ],
  ],
  limit: 4,
});

values = Value.findAll( {
  include: [
    {
      model: Job,
      foreignKey: 'jobId',
      through: {
        model: JobValue,
        joinTableAttributes: ['value'],
        attributes: ['id']
      },
      where: {'id': job.id},
      required: true
    },

  ],
  order: [
    [ { model: Job}, { model: JobValue}, 'value', 'DESC' ],
  ],
  limit: 3,
});

interests = Interest.findAll( {
  include: [
    {
      model: Job,
      foreignKey: 'jobId',
      through: {
        model: JobInterest,
        joinTableAttributes: ['value'],
        attributes: ['id']
      },
      where: {'id': job.id},
      required: true
    },

  ],
  order: [
    [ { model: Job}, { model: JobInterest}, 'value', 'DESC' ],
  ],
  limit: 3,
});


abilities = Ability.findAll( {
  include: [
    {
      model: Job,
      foreignKey: 'jobId',
      through: {
        model: JobAbility,
        joinTableAttributes: ['importance', 'level'],
        attributes: ['id']
      },
      where: {'id': job.id},
      required: true
    },

  ],
  order: [
    [ { model: Job}, { model: JobAbility}, 'importance', 'DESC' ],
  ],
  limit: 5,
});

knowledges = Knowledge.findAll( {
  include: [
    {
      model: Job,
      foreignKey: 'jobId',
      through: {
        model: JobKnowledge,
        joinTableAttributes: ['importance', 'level'],
        attributes: ['id']
      },
      where: {'id': job.id},
      required: true
    },

  ],
  order: [
    [ { model: Job}, { model: JobKnowledge}, 'importance', 'DESC' ],
  ],
  limit: 5,
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
};

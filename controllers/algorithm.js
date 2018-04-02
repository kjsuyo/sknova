var models  = require('../models');
var express = require('express');
var router  = express.Router();
var numeral = require('numeral');
var date = require('date-and-time');
var pluralize = require('pluralize');
var changeCase = require('change-case');
var _ = require('lodash');

const Lookup = require('../models').Algolookup;


module.exports = {

  run(req, res) {

// create user data (for testing purposes -- to be replaced by something that receives the JSON object from the quiz app)

    var userdata = [];

    for (i=0; i < 57; i++) {
      userdata[i] = 3;
    }

// initialize calculation arrays

    var ranking = [];

    var score = [];

    var joblist = [];

// perform lookup on feature table

    var lookup = Lookup.findAll().then(lookup => {

// then, for each job ...

    for(i=0;i<965;i++) {

// push the career fit score - as defined by
//      sum((feature[career[i]][k] - feature[user][k]) ^ 2 ) ...

    score.push(
        Math.pow(lookup[i].con_1 - userdata[0], 2) +
        Math.pow(lookup[i].con_2 - userdata[1], 2) +
        Math.pow(lookup[i].con_3 - userdata[2], 2) +
        Math.pow(lookup[i].con_4 - userdata[3], 2) +
        Math.pow(lookup[i].con_5 - userdata[4], 2) +
        Math.pow(lookup[i].con_6 - userdata[5], 2) +
        Math.pow(lookup[i].con_7 - userdata[6], 2) +
        Math.pow(lookup[i].con_8 - userdata[7], 2) +
        Math.pow(lookup[i].con_9 - userdata[8], 2) +
        Math.pow(lookup[i].con_10 - userdata[9], 2) +
        Math.pow(lookup[i].con_11 - userdata[10], 2) +
        Math.pow(lookup[i].con_12 - userdata[11], 2) +
        Math.pow(lookup[i].con_13 - userdata[12], 2) +
        Math.pow(lookup[i].con_14 - userdata[13], 2) +
        Math.pow(lookup[i].con_15 - userdata[14], 2) +
        Math.pow(lookup[i].con_16 - userdata[15], 2) +
        Math.pow(lookup[i].con_17 - userdata[16], 2) +
        Math.pow(lookup[i].con_18 - userdata[17], 2) +
        Math.pow(lookup[i].con_19 - userdata[18], 2) +
        Math.pow(lookup[i].con_20 - userdata[19], 2) +
        Math.pow(lookup[i].con_21 - userdata[20], 2) +
        Math.pow(lookup[i].con_22 - userdata[21], 2) +
        Math.pow(lookup[i].con_23 - userdata[22], 2) +
        Math.pow(lookup[i].con_24 - userdata[23], 2) +
        Math.pow(lookup[i].con_25 - userdata[24], 2) +
        Math.pow(lookup[i].con_26 - userdata[25], 2) +
        Math.pow(lookup[i].con_27 - userdata[26], 2) +
        Math.pow(lookup[i].con_28 - userdata[27], 2) +
        Math.pow(lookup[i].con_29 - userdata[28], 2) +
        Math.pow(lookup[i].con_30 - userdata[29], 2) +
        Math.pow(lookup[i].con_31 - userdata[30], 2) +
        Math.pow(lookup[i].con_32 - userdata[31], 2) +
        Math.pow(lookup[i].con_33 - userdata[32], 2) +
        Math.pow(lookup[i].con_34 - userdata[33], 2) +
        Math.pow(lookup[i].con_35 - userdata[34], 2) +
        Math.pow(lookup[i].con_36 - userdata[35], 2) +
        Math.pow(lookup[i].con_37 - userdata[36], 2) +
        Math.pow(lookup[i].con_38 - userdata[37], 2) +
        Math.pow(lookup[i].con_39 - userdata[38], 2) +
        Math.pow(lookup[i].con_40 - userdata[39], 2) +
        Math.pow(lookup[i].con_41 - userdata[40], 2) +
        Math.pow(lookup[i].con_42 - userdata[41], 2) +
        Math.pow(lookup[i].con_43 - userdata[42], 2) +
        Math.pow(lookup[i].con_44 - userdata[43], 2) +
        Math.pow(lookup[i].con_45 - userdata[44], 2) +
        Math.pow(lookup[i].con_46 - userdata[45], 2) +
        Math.pow(lookup[i].con_47 - userdata[46], 2) +
        Math.pow(lookup[i].con_48 - userdata[47], 2) +
        Math.pow(lookup[i].con_49 - userdata[48], 2) +
        Math.pow(lookup[i].con_50 - userdata[49], 2) +
        Math.pow(lookup[i].con_51 - userdata[50], 2) +
        Math.pow(lookup[i].con_52 - userdata[51], 2) +
        Math.pow(lookup[i].con_53 - userdata[52], 2) +
        Math.pow(lookup[i].con_54 - userdata[53], 2) +
        Math.pow(lookup[i].con_55 - userdata[54], 2) +
        Math.pow(lookup[i].con_56 - userdata[55], 2) +
        Math.pow(lookup[i].con_57 - userdata[56], 2)
      );

// ... push the associated jobID to the job listing...  note - jobTitle for testing/validation purposes

      joblist.push(lookup[i].jobTitle);

      // joblist.push(lookup[i].jobId);

// ...and add the new score+ID pair to the ranking array.

    ranking.push([score[i], joblist[i]]);

}

// Then sort the ranking array by score (smaller is better)

  ranking.sort(function(a, b)
    {
      return a[0] - b[0];
    });

// Finally, send the rank-ordered list off to its next destination.

    Promise.all([ranking]).then(results => {
      res.render('algoresult', {
        title: 'Results',
        ranking: results[0],
        });
      });
    });
  },
};

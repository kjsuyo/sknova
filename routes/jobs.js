var express = require('express');
var router = express.Router();

// Require our controllers
var jobs_controller = require('../controllers/jobController');
// var author_controller = require('../controllers/authorController');
// var genre_controller = require('../controllers/genreController');
// var book_instance_controller = require('../controllers/bookinstanceController');


/// JOB ROUTES ///

/* GET job home page. */
router.get('/', jobs_controller.index);

/* GET request for one Book.
router.get('/jobs/:id', jobs_controller.jobs_detail);

/* GET request for list of all Book.
router.get('/jobs', jobs_controller.jobs_list);
*/

module.exports = router;

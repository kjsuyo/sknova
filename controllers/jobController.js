var Job = require('../models/job');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        job_count: function(callback) {
          sequelize.fn('count', { industry: 'business' });
        },
/*        job_instance_count: function(callback) {
            JobInstance.count(callback);
        },
        job_instance_available_count: function(callback) {
            JobInstance.count({status:'Available'},callback);
        },

        author_count: function(callback) {
            Author.count(callback);
        },
        genre_count: function(callback) {
            Genre.count(callback);
        },
        */
    }, function(err, results) {
        res.render('index', { title: 'Skillterrier', error: err, data: results });
    });
};


// Display list of all books
exports.book_list = function(req, res, next) {

  Book.find({}, 'title author ')
    .populate('author')
    .exec(function (err, list_books) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('book_list', { title: 'Book List', book_list:  list_books});
    });

};

// Display detail page for a specific book
exports.book_detail = function(req, res, next) {

    async.parallel({
        book: function(callback) {

            Book.findById(req.params.id)
              .populate('author')
              .populate('genre')
              .exec(callback);
        },
        book_instance: function(callback) {

          BookInstance.find({ 'book': req.params.id })
          //.populate('book')
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('book_detail', { title: 'Title', book:  results.book, book_instances: results.book_instance } );
    });

};

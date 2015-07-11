var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);

  app.get('/reviews', function(req, res){
    // read a list of reviews
    var univId = req.params.univId;

  });

  app.post('/reviews', function(){

  });

  app.get('/reviews/:id', function(){

  });

  app.get('/universities', function(res, req){

  });

  app.get('/universities/:id', function(res, req){
    // todo: later
  });

  app.post('/universities', function(res, req){
    // todo: later
  });

};


// router.get('/', function (req, res, next) {
//   Article.find(function (err, articles) {
//     if (err) return next(err);
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });

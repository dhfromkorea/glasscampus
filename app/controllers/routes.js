var express = require('express');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
// var router = express.Router();
var handler = require('./routeHandler.js');

module.exports = function (app) {
  app.get('/', handler.getIndex);
  app.get('/reviews', handler.getReviews);
  app.get('/reviews/:id', handler.getReview);
  app.post('/reviews', handler.createReview);

  app.get('/universities', handler.getUnivs);
  app.get('/universities/:id', handler.getUniv);
  app.post('/universities', handler.createUniv);
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

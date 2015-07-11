var express = require('express');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
// var router = express.Router();
var handler = require('./routeHandler.js');

module.exports = function (app) {
  app.get('/', handler.getIndex);

  app.route('/reviews')
    .get(handler.getReviews)
    .post(handler.createReview);

  app.get('/reviews/:id', handler.getReview);

  app.route('/universities')
    .get(handler.getUnivs)
    .post(handler.createUniv);

  app.get('/universities/:id', handler.getUniv);
};


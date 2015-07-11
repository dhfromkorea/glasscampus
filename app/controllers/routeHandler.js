var mongoose = require('mongoose');
var University = require('../models/university.js');
var Review = require('../models/review.js');

module.exports.getIndex = function(req, res){
	res.render('index');
};

module.exports.getReviews = function(req, res){
	// univId = user-selected university
	var univId = req.params.id || '';
	// find reviews
	if(univId) {
		Review.findById(univId, successCallback, errorCallback);
	} else {
		Review.findAll(successCallback, errorCallback);
	}
};

module.exports.getReview = function(req, res){
	var reviewId = req.params.id || '';
	// find the review
	// onsuccess
	res.json(review);
	// onerror
};
module.exports.createReview = function(req, res){
	var review = req.body.data;
	// onsuccess
	res.send(newReview);
};
module.exports.getUnivs = function(req, res){
	// get all univs

	// onsucesss
	res.json(univs);
};
module.exports.getUniv = function(req, res){
	var univId = req.params.id || '';
	// onsuccess
	res.json(univ);
};
module.exports.createUniv = function(req, res){
	var univ = req.body.data;

	// onsuccess
	res.send(newUniv);
};
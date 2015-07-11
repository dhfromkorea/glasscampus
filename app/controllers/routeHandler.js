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
	// Review.findById(reviewId)
	// onsuccess
	res.json(review);
	// onerror
};
module.exports.createReview = function(req, res){
	var review = req.body.data;
	//
	/*Review.create({
		title: titleVar,
		description: descVar,
		universityId: univIdVar,
		rating: ratingVar
	}, successCallback, errorCallback);*/
	// onsuccess
	res.send(newReview);
};
module.exports.getUnivs = function(req, res){
	// get all univs
	// University.findAll(successCallback, errorCallback)
	// onsucesss
	res.json(univs);
};
module.exports.getUniv = function(req, res){
	var univId = req.params.id || '';
	// University.findById(univId, successCallback, errorCallback)
	// onsuccess
	res.json(univ);
};
module.exports.createUniv = function(req, res){
	var univ = req.body.data;
	/*University.create({
		name: nameVar
	});*/
	// onsuccess
	res.send(newUniv);
};
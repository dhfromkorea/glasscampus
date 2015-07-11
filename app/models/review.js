/**
 * Joost Ouwerling
 */

var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
	title: String,
	description: String,
	rating: Number,
  university: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
	createdAt: { type : Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
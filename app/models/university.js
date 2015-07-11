/**
 * Joost Ouwerling
 */

var mongoose = require('mongoose');

var universityScheme = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('University', universityScheme);
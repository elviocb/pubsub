'use strict';

var _ = require('underscore');
var model = require('../models/badges');

// Send badges to model to be saved

exports.save = function(req, res, next){
  // basically, when "next" is involked it says: "I'm done with this controller, move to the next one."
	// For security reasons, we will clone the req.body to prevent inusited changes into the req.body object
	var badges = _.clone(req.body);
};

// Send badges to pub/sub socket in model

exports.send = function(){};
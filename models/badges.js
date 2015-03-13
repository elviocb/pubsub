'use strict';

var redis = require('../lib/redis');

/**
 * Save badges to database
 * @param {Array} badges
 * @param {Function} callback 

*/

exports.save = function(badges, callback){
  //recursion base case
  if (badges.length === 0) return callback(null, null);
  
  // Pop the last badge and assign to the badge variable
  var badge = badges.pop();

  // Save the badge into the DB's List
  redis.lpush('badges', JSON.stringify(badge), function(err){
  	if (err) return callback(err, null);

  	// Create a recursion until badges.length reachs '0';
  	exports.save(badges, callback);
  });
};
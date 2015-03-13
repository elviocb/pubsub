'use strict';

var redis = require('redis');
var client = redis.createClient();

// Checks if there's a problem in the connection
client.on('error', function(err){
	throw err;
});

module.exports = client;
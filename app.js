'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    badges = require('./controllers/badges');

// app.use() is used to define a middleware to the request. Therefore the request will have to pass trough the middleware before reach the route.
/* The express.json() will return the middleware that will parse the incoming request body and checks whether the body request is acceptable or not*/
app.use(bodyParser.json());

// For the sake of modularity we will define the logic of this route into a controller/middleware.
// This will work this way: request --> '/' --> badges.save --> badges.send
app.post('/', badges.save, badges.send);

app.listen(8000, function(){
	console.log('Listening on port 8000..');
});
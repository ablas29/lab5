// Get all of our friend data
const { response } = require('express');
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	response.render('index', data);
};



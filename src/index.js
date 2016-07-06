'use strict'; 

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');


$(function() {

	$('div.append-point').append(header({}));
	$('div.append-point').append(buildScreen({}));

	$('#rules').on('click', function() {
		console.log('rules');
		// toggle active for the link when it is clicked
	});
	$('#start').on('click', function() {
		console.log('start');
	});
	$('#about').on('click', function() {
		console.log('about');
	});

});
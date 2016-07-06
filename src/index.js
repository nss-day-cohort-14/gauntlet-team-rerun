'use strict'; 

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');


$(function() {

	$('div.append-point').append(header({}));
	$('div.append-point').append(buildScreen({}));

	$('#rules').on('click', function() {
		toggleActive(this);
	});
	$('#start').on('click', function() {
		toggleActive(this);
	});
	$('#about').on('click', function() {
		toggleActive(this);
	});

	function toggleActive(link) {
		let activeSelector = `#${link.id} div`
		$('.link--div').removeClass('active');
		$(activeSelector).addClass('active');
	}

});
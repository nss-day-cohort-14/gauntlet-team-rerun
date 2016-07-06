'use strict'; 

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');
const rules = require('../views/rules.jade');


$(function() {

	$('body').prepend(header({}));
	$('div.append-point').append(rules({}));

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
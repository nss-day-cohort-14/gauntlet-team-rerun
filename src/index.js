'use strict'; 

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');
const rules = require('../views/rules.jade');
const aboutUs = require('../views/aboutUs.jade');

let family = [
	'Grandma',
	'Uncle Bobby',
	'Jimmy',
	'Sue',
	'Beth',
	'Diane'
];

$(function() {

	$('body').prepend(header({}));
	$('div.append-point').append(rules({}));

	$('#rules').on('click', function() {
		toggleActive(this);
		$('.feast').css("background-image", "url('../../src/images/thanksgiving-rockwell.jpg')")
		$('div.append-point').empty();
		$('div.append-point').append(rules({}));
	});
	$('#start').on('click', function() {
		toggleActive(this);
		$('.feast').css("background-image", "url('../../src/images/uncle_sam.jpg')")
		$('div.append-point').empty();
		$('div.append-point').append(buildScreen({family: family}));
	});
	$('#about').on('click', function() {
		toggleActive(this);
		$('.feast').css("background-image", "url('../../src/images/phones.jpg')");
		$('div.append-point').empty();
		$('div.append-point').append(aboutUs({}));
	});

	function toggleActive(link) {
		let activeSelector = `#${link.id} div`
		$('.link--div').removeClass('active');
		$(activeSelector).addClass('active');
	}

});
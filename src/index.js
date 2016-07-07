'use strict'; 

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');
const rules = require('../views/rules.jade');
const aboutUs = require('../views/aboutUs.jade');
const Argument = require('../src/argument');
const GrandpaType = require('../src/GrandpaType');
const FamilyType = require('../src/family');

let argument;

let family = [
	'Daughter',
	'Brother',
	'Wife',
	'Grandson',
	'Son',
	'Daughter_in_law'
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

	// build buttons
	$('.append-point').on('click', '#choose-btn', function() {
		if (argument === undefined) {
			argument = new Argument();
			let type = getGramps();
			argument.grandpa = new GrandpaType[type]();
			let famType = $('#choose').val();
			console.log(famType);
			argument.familyMember = new FamilyType[famType]();
			console.log(argument);
		}
	});

	function toggleActive(link) {
		let activeSelector = `#${link.id} div`
		$('.link--div').removeClass('active');
		$(activeSelector).addClass('active');
	}

	function getGramps() {
		let gramps = Math.floor(Math.random() * 3);
		switch (gramps) {
			case 0: return 'Mean';
			case 1: return 'Smart';
			case 2: return 'Drunk'; 
		}
	}

});
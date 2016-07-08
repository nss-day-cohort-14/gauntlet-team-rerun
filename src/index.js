'use strict'; 

const $ = require('jQuery');

// fight logic and combatants
const Argument = require('../src/argument');
const GrandpaType = require('../src/GrandpaType');
const FamilyType = require('../src/family');

// views
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');
const rules = require('../views/rules.jade');
const aboutUs = require('../views/aboutUs.jade');
const battle = require('../views/battle.jade');
const fightResults = require('../views/fightResults.jade');

// 
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
		// if argument already exists then this is the second fighter
		// and grandpa has already been randomly created
		if (argument === undefined) {
			argument = new Argument();
			// getGramps is a randomly chooses one of three grandpa types
			let type = getGramps();
			argument.grandpa = new GrandpaType[type]();
			let famType = $('#choose').val();
			argument.familyMember = new FamilyType[family[famType]]();
			family.splice(famType, 1);
		} else {
			let famType = $('#choose').val();
			argument.familyMember = new FamilyType[family[famType]]();
			family.splice(famType, 1);
		}
		// removes choose background and shows fight background
		$('.append-point').empty();
		$('.append-point').append(battle({}));
	});
	$('.append-point').on('click', '#fight', function() {
		// argument fight conducts combat and returns an object
		// with all the results data
		let results = argument.fight();
		// display results;
		console.log(results);
		$('.results').empty();
		let familyMember = argument.familyMember.name;
		let gImage = argument.grandpa.img;
		let fImage = argument.familyMember.img;
		console.log(argument);
		// passes fight results and the name of the family member
		$('.results').append(fightResults({results, familyMember, gImage, fImage}));
		// if the family member has attacked 4 times (counting down from 4 to 1)
		// or grandpa wins the fight (resulting in 'fatality')
		// then player must choose another fighter
		if (results.familyAttacks === 1 || results.fatality === 'family') chooseNextFam();
		// if grandpa dies, then the family wins
		if (results.fatality === 'grandpa') victory();
	});

	function chooseNextFam() {
		console.log('chooseNextFam');
		// replace with bootstrap modal
		alert('Grandpa won that round, choose another fighter');
		$('div.append-point').empty();
		$('div.append-point').append(buildScreen({family: family}));
	}

	function victory() {
		console.log('victory');
		alert('Victory belongs to the family');
		// show family gloating
		// go back to rules screen
	}

	// function to change characteristics of the active button
	function toggleActive(link) {
		let activeSelector = `#${link.id} div`;
		$('.link--div').removeClass('active');
		$(activeSelector).addClass('active');
	}

	// function that picks one of three grandpa types
	function getGramps() {
		let gramps = Math.floor(Math.random() * 3);
		switch (gramps) {
			case 0: return 'Mean';
			case 1: return 'Smart';
			case 2: return 'Drunk'; 
		}
	}

});
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
const victoryView = require('../views/victoryView.jade');
const gVictoryView = require('../views/gVictoryView.jade');

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
		$('.feast').css("background-image", "url('../../src/images/thanksgiving-rockwell.jpg')");
		$('div.append-point').empty();
		$('div.append-point').append(rules({}));
	});
	$('#start').on('click', function() {
		toggleActive(this);
		$('.feast').css("background-image", "url('../../src/images/uncle_sam.jpg')");
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
		$('.feast').css("background-image", "url('../../src/images/livingRoom.jpg')");
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
		let gImage = argument.grandpa.img;
		let fImage = argument.familyMember.img;
		let gStory = argument.grandpa.backStory;
		let fStory = argument.familyMember.backStory;
		$('.append-point').append(battle({
			gImage: gImage, 
			fImage: fImage,
			gStory: gStory,
			fStory: fStory
		}));
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
		console.log(results.fights);
		if (results.fatality === 'grandpa') {
			victory();
		} else if (results.familyAttacks === 1 || results.fatality === 'family') {
			if (family.length === 0) {
				gVictory();
				// break;
			} else {
				chooseNextFam();
			}
		}
		// if grandpa dies, then the family wins
	});

	function gVictory() {
		console.log('gvicotyr');
		$('.feast').css("background-image", "url('../../src/images/drunk-grandpa.jpg')");
		$('div.append-point').empty();
		$('div.append-point').append(gVictoryView({}));
	}

	function chooseNextFam() {
		console.log('family array length', family.length);

		console.log('chooseNextFam');
		$('.feast').css("background-image", "url('../../src/images/drunk-grandpa.jpg')");
		let message = "I won again, Loser. Heh heh heh. Which peckerwood's got next?";
		$('div.append-point').empty();
		$('div.append-point').append(buildScreen({family: family, message: message}));
				// alert('Grandpa won that round, choose another fighter');
		argument.fights += 1;
	}

	function victory() {
		console.log('victory');
		// alert('Victory belongs to the family');
		$('div.append-point').empty();
		$('div.append-point').append(victoryView({}));
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
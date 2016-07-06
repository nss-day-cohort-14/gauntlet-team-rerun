"use strict";

const Grandpa = require('../src/grandpa.js');

function DrunkGrandpa () {
	Grandpa.call(this);
	this.bac = 2;
	this.anger = 30;
	this.viciousness = 15;
	this.patience = 5;
}

let alcoholicHammer = {
	name: 'Hennessy Hammer ', // name
  damage: 8, // how much it could reduce health
  snarkyRemark: "Who do I have to disown to get another drink around here (hicCUP!).", // what will show up on the screen
  use: 2 // how many time in a round this move can be used
};

let racistComment = {
	name: 'Racist Comment', // name
  damage: 15, // how much it could reduce health
  snarkyRemark: "Well, I'm not a racist, but...(something horrible)", // what will show up on the screen
  use: 1 // how many time in a round this move can be used
};

let mumbleBee = {
	name: 'The Mumble-Bee', // name
  damage: 5, // how much it could reduce health
  snarkyRemark: "M-m-may... wh-what? (something unintelligible...)", // what will show up on the screen
  use: 5 // how many time in a round this move can be used
};

let boozeOoka = {
	name: 'Booze-ooka', // name
  damage: 20, // how much it could reduce health
  snarkyRemark: "(Grandpa polishes off his bourbon)", // what will show up on the screen
  use: 1 // how many time in a round this move can be used
};

module.exports = DrunkGrandpa;


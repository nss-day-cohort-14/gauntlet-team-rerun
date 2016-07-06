"use strict";

const Grandpa = require('../src/grandpa.js');

const SmartGrandpa = function () {
	Grandpa.call(this);
	this.bac = 1;
	this.anger = 25;
	this.viciousness = 40;
	this.patience = 70;
};

let dagger = {
	name: 'The Dagger of Cutting Rhetoric', // name
  damage: 10, // how much it could reduce health
  snarkyRemark: "I'm not surprised you did something dumb again.", // what will show up on the screen
  use: 2 // how many time in a round this move can be used
};

let memoryBomb = {
	name: 'The Memory Bomb', // name
  damage: 15, // how much it could reduce health
  snarkyRemark: "Well, if I recall, it's always your fault.", // what will show up on the screen
  use: 1 // how many time in a round this move can be used
};

let theSnort = {
	name: 'The Snort', // name
  damage: 5, // how much it could reduce health
  snarkyRemark: "(snorts) That's what you think.", // what will show up on the screen
  use: 5 // how many time in a round this move can be used
};

let sigh = {
	name: 'Ultra-Sigh', // name
  damage: 18, // how much it could reduce health
  snarkyRemark: "(old man-like sigh) I can't believe I have to put up with a joke like you.", // what will show up on the screen
  use: 1 // how many time in a round this move can be used
};

module.exports = SmartGrandpa;
"use strict";

const Grandpa = require('../src/grandpa.js');

function MeanGrandpa () {
	Grandpa.call(this);
	this.bac = 1.2;
	this.anger = 50;
	this.viciousness = 50;
	this.patience = 40;
}

let dagger = {
	name: 'Insult Barrage', // name
  damage: 15, // how much it could reduce health
  snarkyRemark: "You're a complete and utter fool, and you smell. And I wish you weren't around all the time.", // what will show up on the screen
  use: 2 // how many time in a round this move can be used
};

let blasterFromThePast = {
	name: 'Blaster From The Past', // name
  damage: 20, // how much it could reduce health
  snarkyRemark: "Well, if you hadn't been so stupid that one time, we wouldn't be having this converstation.", // what will show up on the screen
  use: 2 // how many time in a round this move can be used
};

let  yawnZilla = {
	name: 'Yawn-zilla', // name
  damage: 5, // how much it could reduce health
  snarkyRemark: "(yawns) Yeah, I definitely wasn't even trying to listen to you.", // what will show up on the screen
  use: 5 // how many time in a round this move can be used
};

let leer = {
	name: 'Leer', // name
  damage: 5, // how much it could reduce health
  snarkyRemark: "Does this look like a face that cares?", // what will show up on the screen
  use: 5 // how many time in a round this move can be used
};

module.exports = MeanGrandpa;

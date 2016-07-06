'use strict';

const Person = require('../src/person');

const Daughter = function() {
	Person.call(this);
	this.sensitivity = 50;
	this.viciousness = 40;
	this.patience = 50;
};

//Weapon objects
let past = {
	name: "Bring Up the Past",
	damage: 15,
	snarkyRemark: "",
	use: 1
};

let guilt = {
	name: "Guilt Trip",
	damage: 7,
	snarkyRemark: "",
	use: 1
};


module.exports = Daughter;
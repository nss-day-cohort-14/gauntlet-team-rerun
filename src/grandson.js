'use strict';

const Person = require('../src/person');

const Grandson = function() {
	Person.call(this);
	this.sensitivity = 60;
	this.viciousness = 40;
	this.patience = 20;
};

module.exports = Grandson;
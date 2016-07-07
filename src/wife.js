'use strict';

const Person = require('../src/person');

const Wife = function() {
	Person.call(this);
	this.sensitivity = 30;
	this.viciousness = 40;
	this.patience = 80;
};

module.exports = Wife;
'use strict';

const Person = require('../src/person');

const Grandson = function() {
	Person.call(this);
};

module.exports = Grandson;
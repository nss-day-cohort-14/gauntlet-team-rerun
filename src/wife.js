'use strict';

const Person = require('../src/person');

const Wife = function() {
	Person.call(this);
}

module.exports = Wife;
'use strict';

const Person = require('../src/person');

const Son = function() {
	Person.call(this);
}

module.exports = Son;
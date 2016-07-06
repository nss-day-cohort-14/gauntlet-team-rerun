'use strict';

const Person = require('../src/person');

const Brother = function() {
	Person.call(this);
};

module.exports = Brother;
'use strict';

const Person = require('../src/person');

const Wife = function() {
	Person.call(this);
};
Wife.prototype = new Person();
module.exports = Wife;
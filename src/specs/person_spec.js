'use strict';

var Person = require('../person');

describe('specs for person', function() {
	let testPerson = new Person();
	it('should behave...person is defined', function() {
		expect(testPerson).toBeDefined();
	});
	it('should have a viciousness attribute', function() {
		expect(testPerson.viciousness).toBeDefined();
	});
});
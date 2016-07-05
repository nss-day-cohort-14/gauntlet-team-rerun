'use strict';

var Person = require('../person');

describe('specs for person', function() {
	let testPerson = new Person();
	console.log(testPerson);
	it('should behave...person is defined', function() {
		expect(testPerson).toBeDefined();
	});
	it('have a health attribute', function() {
		expect(testPerson.health).toBeDefined();
	});
	it('should have a viciousness attribute', function() {
		expect(testPerson.viciousness).toBeDefined();
	});
	it('have a patience attribute', function() {
		expect(testPerson.patience).toBeDefined();
	});
	it('have a sensitivity attribute', function() {
		expect(testPerson.sensitivity).toBeDefined();
	});
	it('have a weapons attribute', function() {
		expect(testPerson.weapons).toBeDefined();
	});

	it('should be able to hold weapons', function() {
		testPerson.setWeapons({name:'insult'});
		console.log(testPerson);
		expect(testPerson.weapons.length).toBe(1);
		expect(testPerson.weapons).toEqual([{name:'insult'}]);
	})


});
'use strict';

const Family = require('../family');
const Hammer = require('../weaponHammer');

describe('family specs', function() {
	it('family should be defined', function() {
		let testDaughter = new Family.Daughter();
		expect(testDaughter).toBeDefined();
	});
	it('should be able to create son dynamically', function() {
		let testName = 'Son';
		let testSon = new Family[testName]();
		expect(testSon.health).toBe(30);
	});
	it('should be able to set weapns through the family class', function() {
		let testName = 'Wife';
		let testWife = new Family[testName]();
		testWife.setWeapons(new Hammer());
		expect(testWife.weapons).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({name: 'Hennessy Hammer'})
		]));
	});
});
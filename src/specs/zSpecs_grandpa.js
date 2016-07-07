'use strict';

const GrandpaType = require('../GrandpaType');
const GrandWeapon = require('../GrandWeapon');

describe('grandpa types specs', function() {
	let mean = new GrandpaType.Mean();
	let smart = new GrandpaType.Smart();
	let drunk = new GrandpaType.Drunk();
	it('all three grandpas should be defined', function() {	
		expect(mean).toBeDefined();
		expect(smart).toBeDefined();
		expect(drunk).toBeDefined();
	});
	it('should behave...bac is public', function() {
		expect(drunk.bac).toEqual(2);
	});
	it('should behave...health is inherited', function() {
		expect(smart.health).toEqual(100);
	});
	it('should behave...mean Grandpa weapons are set', function() {
		mean.setWeapons(new GrandWeapon.BoozeOoka());
		expect(mean.weapons).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({name: 'BoozeOoka'})
		]));
	});
	it('should behave...drunk Grandpa weapons are set', function() {
		drunk.setWeapons(new GrandWeapon.BoozeOoka());
		expect(mean.weapons).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({name: 'BoozeOoka'})
		]));
	});
	it('should behave...smart Grandpa weapons are set', function() {
		smart.setWeapons(new GrandWeapon.BoozeOoka());
		expect(mean.weapons).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({name: 'BoozeOoka'})
		]));
	});
});
'use strict';

const Weapon = require('../weapon');

xdescribe('weapon spec', function() {
	it('weapon to be defined', function() {
		let testWeapon = new Weapon();
		testWeapon.damage = 0;
		testWeapon.uses = 4;
		console.log(testWeapon);
		expect(testWeapon).toBeDefined();
		expect(testWeapon.damage).toBe(0);
		expect(testWeapon.uses).toBe(4);
	});
});
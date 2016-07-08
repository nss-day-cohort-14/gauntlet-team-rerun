"use strict";

const DrunkGrandpa = require('../drunkGrandpa.js');

xdescribe('specs for DrunkGrandpa', function () {
	let testDrunkGrandpa = new DrunkGrandpa();
	// console.log("testDrunkGrandpa", testDrunkGrandpa);
	it('DrunkGrandpa should be defined', function () {
		expect(testDrunkGrandpa).toBeDefined();
	});
});
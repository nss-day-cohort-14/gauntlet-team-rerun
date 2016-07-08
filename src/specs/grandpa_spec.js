"use strict";

const Grandpa = require('../grandpa.js');

xdescribe('specs for Grandpa', function () {
	let testGrandpa = new Grandpa();
	// console.log("testGrandpa", testGrandpa);
	it('Grandpa function should be definined', function () {
		expect(testGrandpa).toBeDefined();
	});
	it('should have a bac attribute', function () {
		expect(testGrandpa.bac).toBeDefined();
	});
	it ('should have an anger attribute', function () {
		expect(testGrandpa.anger).toBeDefined();
	});
});
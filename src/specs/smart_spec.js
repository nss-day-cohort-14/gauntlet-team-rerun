"use strict";

const SmartGrandpa = require('../smartGrandpa.js');

xdescribe('specs for SmartGrandpa', function () {
	let testSmartGrandpa = new SmartGrandpa();
	console.log("testSmartGrandpa", testSmartGrandpa);
	it('smartGrandpa should be defined', function () {
		expect(testSmartGrandpa).toBeDefined();
	});
	it('smartGrandpa.bac should equal 1', function () {
		expect(testSmartGrandpa.bac).toBe(1);
	});
});
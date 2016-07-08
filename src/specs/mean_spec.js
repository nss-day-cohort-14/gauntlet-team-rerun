"use strict";

const MeanGrandpa = require('../meanGrandpa.js');

xdescribe('specs for MeanGrandpa', function () {
	let testMeanGrandpa = new MeanGrandpa();
	console.log("testMeanGrandpa", testMeanGrandpa);
	it('MeanGrandpa should be defined', function () {
		expect(testMeanGrandpa).toBeDefined();
	});
	it('MeanGrandpa.bac should equal 1.2', function () {
		expect(testMeanGrandpa.bac).toBe(1.2);
	});
});
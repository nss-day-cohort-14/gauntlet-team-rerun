'use strict';

const DaughterInLaw = require("../daughter_in_law");

describe('specs for daughter-in-law', function(){
	let testDaughterInLaw = new DaughterInLaw();
	console.log(testDaughterInLaw);
	it('should be defined', function(){
		expect(testDaughterInLaw).toBeDefined();
	});
});
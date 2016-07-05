'use strict';

const Wife = require("../wife");

describe('specs for wife', function(){
	let testWife = new Wife();
	console.log(testWife);
	it('should be defined', function(){
		expect(testWife).toBeDefined();
	});
});
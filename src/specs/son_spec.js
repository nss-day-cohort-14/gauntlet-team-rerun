'use strict';

const Son = require("../son");

describe('specs for son', function(){
	let testSon = new Son();
	console.log(testSon);
	it('should be defined', function(){
		expect(testSon).toBeDefined();
	});
});
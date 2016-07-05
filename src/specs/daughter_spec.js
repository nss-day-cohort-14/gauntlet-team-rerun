'use strict';

const Daughter = require("../daughter");

describe('specs for daughter', function(){
	let testDaughter = new Daughter();
	console.log(testDaughter);
	it('should be defined', function(){
		expect(testDaughter).toBeDefined();
	});
});
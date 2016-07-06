'use strict';

const Brother = require("../brother");

describe('specs for brother', function(){
	let testBrother = new Brother();
	console.log("testBrother", testBrother);
	it('should be defined', function(){
		expect(testBrother).toBeDefined();
	});
});
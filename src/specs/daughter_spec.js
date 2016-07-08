'use strict';

const Daughter = require("../daughter");

xdescribe('specs for daughter', function(){
	let testDaughter = new Daughter();
	console.log("testDaughter", testDaughter);
	it('should be defined', function(){
		expect(testDaughter).toBeDefined();
	});
});
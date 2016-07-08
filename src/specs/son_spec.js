'use strict';

const Son = require("../son");

xdescribe('specs for son', function(){
	let testSon = new Son();
	console.log("testSon", testSon);
	it('should be defined', function(){
		expect(testSon).toBeDefined();
	});
});
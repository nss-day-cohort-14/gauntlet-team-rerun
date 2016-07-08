'use strict';

const Wife = require("../wife");

xdescribe('specs for wife', function(){
	let testWife = new Wife();
	console.log("testWife", testWife);
	it('should be defined', function(){
		expect(testWife).toBeDefined();
	});
});
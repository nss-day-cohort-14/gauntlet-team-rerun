'use strict';

const Argument = require('../argument');

xdescribe('specs for argument', function() {
	let testArgument = new Argument();
	it('argument should be defiend', function() {
		expect(testArgument).toBeDefined();
	});
	
});
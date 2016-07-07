'use strict';

const Argument = require('../argument');
const GrandpaType = require('../GrandpaType');
const FamilyType = require('../family');

describe('argument spec fight engine', function() {
	let testArgument = new Argument();
	testArgument.grandpa = new GrandpaType.Mean();
	testArgument.familyMember = new FamilyType.Wife();
	it('argument will be defined', function() {
		console.log(testArgument);
		expect(testArgument).toBeDefined();
	})
});
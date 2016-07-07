'use strict';

const Argument = require('../argument');
const GrandpaType = require('../GrandpaType');
const FamilyType = require('../family');
const GrandWeapon = require('../GrandWeapon');
const FamWeapon = require('../FamWeapon');

describe('argument spec fight engine', function() {
	let testArgument = new Argument();
	testArgument.grandpa = new GrandpaType.Mean();
	testArgument.familyMember = new FamilyType.Daughter_in_law();
	testArgument.grandpa.setWeapons(new GrandWeapon.Leer());
	testArgument.grandpa.setWeapons(new GrandWeapon.Mumble());
	testArgument.grandpa.setWeapons(new GrandWeapon.Racist());
	testArgument.grandpa.setWeapons(new GrandWeapon.Snort());
	testArgument.familyMember.setWeapons(new FamWeapon.DaughterInLawBomb());
	testArgument.familyMember.setWeapons(new FamWeapon.DaughterInLawNoFilter());
	testArgument.familyMember.setWeapons(new FamWeapon.DaughterInLawBlast());
	testArgument.familyMember.setWeapons(new FamWeapon.DaughterInLawCurse());
	it('argument will be defined', function() {
		console.log(testArgument);
		expect(testArgument).toBeDefined();
	});
	it('should be able arm grandpa', function() {
		console.log(testArgument.grandpa.weapons);
		console.log(testArgument.familyMember.weapons);
		expect(testArgument.grandpa.weapons).toBeDefined();
	});
	it('should be able to calculate grandpa attack', function() {
		let gvic = testArgument.grandpa.viciousness;
		let fvic = testArgument.grandpa.viciousness;
		let gdamage = testArgument.grandpa.weapons[0].damage;
		let fdamage = testArgument.familyMember.weapons[0].damage;
		let gpat = testArgument.grandpa.patience;
		let gsen = testArgument.grandpa.sensitivity;
		let fpat = testArgument.familyMember.patience;
		let fsen = testArgument.familyMember.sensitivity;
		for (let i = 0; i < 20; i++ ) {
			let gattack = testArgument.getAttack(gdamage, gvic);
			let fattack = testArgument.getAttack(fdamage, fvic);
			let gDefense = testArgument.getDefense(gpat, gsen);
			let fDefense = testArgument.getDefense(fpat, fsen);
			gattack -= fDefense;
			fattack -= gDefense;
	 		console.log((gattack) + ' --- ' + (fattack) + ' --- ' + (gattack > fattack));
			expect(gattack).toBeLessThan(50);
			expect(testArgument.grandpa.health).not.toEqual(testArgument.grandpa.health - (fattack-gDefense));
		}
	});
	it('argument object should be able to resolve a round of combat and pass results', function() {
		let testRound0 = testArgument.completeRound(testArgument.grandpa.weapons[0], testArgument.familyMember.weapons[0]);
		let testRound1 = testArgument.completeRound(testArgument.grandpa.weapons[1], testArgument.familyMember.weapons[1]);
		expect(testArgument.completeRound).toBeDefined();
		let testRound = [];
		for (let x = 0; x < 3; x++) {
			testRound.push(testArgument.completeRound(testArgument.grandpa.weapons[x], testArgument.familyMember.weapons[x]));
			console.log(testRound[x]);
		}
		expect(testRound1.winner).toBeDefined();
	});
});
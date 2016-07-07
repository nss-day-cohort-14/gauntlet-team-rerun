'use strict';

const GrandWeapon = require('../grandWeapon');

describe('specs for Grandpa Weapons', function() {
	let Blaster = new GrandWeapon.BlasterFromThePast();
	it('Grandpa Weapons should be defined', function() {
		expect(Blaster).toBeDefined();
		expect(Blaster.damage).toBe(20);
	});
	let Booze = new GrandWeapon.BoozeOoka();
	it('Grandpa Weapons should be defined', function() {
		expect(Booze).toBeDefined();
	});
	let Dagger = new GrandWeapon.Dagger();
	it('Grandpa Weapons should be defined', function() {
		expect(Dagger).toBeDefined();
	});
	let Hammer = new GrandWeapon.Hammer();
	it('Grandpa Weapons should be defined', function() {
		expect(Hammer).toBeDefined();
	});
	let InsultBarrage = new GrandWeapon.InsultBarrage();
	it('Grandpa Weapons should be defined', function() {
		expect(InsultBarrage).toBeDefined();
	});
	let Leer = new GrandWeapon.Leer();
	it('Grandpa Weapons should be defined', function() {
		expect(Leer).toBeDefined();
	});
	let MemoryBomb = new GrandWeapon.MemoryBomb();
	it('Grandpa Weapons should be defined', function() {
		expect(MemoryBomb).toBeDefined();
		expect(MemoryBomb.name).toBe('The Memory Bomb');
	});
	let  Mumble= new GrandWeapon.MumbleBee();
	it('Grandpa Weapons should be defined', function() {
		expect(Mumble).toBeDefined();
	});
	let Racist = new GrandWeapon.RacistComment();
	it('Grandpa Weapons should be defined', function() {
		expect(Racist).toBeDefined();
	});
	let Sigh = new GrandWeapon.UltraSigh();
	it('Grandpa Weapons should be defined', function() {
		expect(Sigh).toBeDefined();
	});
	let Snort = new GrandWeapon.TheSnort();
	it('Grandpa Weapons should be defined', function() {
		expect(Snort).toBeDefined();
		expect(Snort.uses).toBe(5);
	});
	let Yawn = new GrandWeapon.YawnZilla();
	it('Grandpa Weapons should be defined', function() {
		expect(Yawn.snarkyRemark).toBe("(yawns) Yeah, I definitely wasn't even trying to listen to you.");
	});

});
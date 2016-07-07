'use strict';

const Weapon = require('../src/weapon');

//Weapon object to hold weapon functions
const FamWeapon = {};

//Wife weapons
FamWeapon.WifeTruth = function() {
	Weapon.call(this);
	this.name = "The Hard Truth";
	this.remark = "I should've married Troy";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.WifeGuilt = function() {
	Weapon.call(this);
	this.name = "Guilt Trip";
	this.remark = "Yeah yeah, keep drinking, not like you're ruining another Christmas or anything";
	this.damage = 7;
	this.uses = 1;
};

FamWeapon.WifeCurse = function() {
	Weapon.call(this);
	this.name = "A Curse Upon You!";
	this.remark = "You stubborn old @#*&!";
	this.damage = 5;
	this.uses = 1;
};

FamWeapon.WifeSilent = function() {
	Weapon.call(this);
	this.name = "Silent but Deadly";
	this.remark = "*** The silence is deafening ***";
	this.damage = 3;
	this.uses = 1;
};


//Brother weapons
FamWeapon.BrotherBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "Smells like that time you crapped yourself";
	this.damage = 12;
	this.uses = 1;
};

FamWeapon.BrotherTruth = function() {
	Weapon.call(this);
	this.name = "The Hard Truth";
	this.remark = "Pretty ironic you were born on a highway, that's where most accidents seem to happen";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.BrotherMooch = function() {
	Weapon.call(this);
	this.name = "Mooch the Booze";
	this.remark = "(Grandpa's bourbon supply is decreased)";
	this.damage = 4;
	this.uses = 1;
};

FamWeapon.BrotherBlow = function() {
	Weapon.call(this);
	this.name = "Low Blow";
	this.remark = "In case you haven't figured it out by now, Mom drank a lot with you";
	this.damage = 5;
	this.uses = 1;
};


//Daughter weapons
FamWeapon.DaughterBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "You still haven't apologized for running over the dog";
	this.damage = 12;
	this.uses = 1;
};

FamWeapon.DaughterThreat = function() {
	Weapon.call(this);
	this.name = "Make a Veiled Threat";
	this.remark = "You know, I've been hearing wonderful things about Del Boca Vista lately...";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.DaughterChange = function() {
	Weapon.call(this);
	this.name = "Change the Subject";
	this.remark = "Hey I've got an idea, let's talk about that will";
	this.damage = 4;
	this.uses = 1;
};

FamWeapon.DaughterBeam = function() {
	Weapon.call(this);
	this.name = "Tractor Beam";
	this.remark = "(Grandpa is softened by the puppy dog eyes)";
	this.damage = 5;
	this.uses = 1;
};


//Son weapons
FamWeapon.SonThreat = function() {
	Weapon.call(this);
	this.name = "Make a Veiled Threat";
	this.remark = "How much is that life insurance policy for again?";
	this.damage = 12;
	this.uses = 1;
};

FamWeapon.SonTruth = function() {
	Weapon.call(this);
	this.name = "The Hard Truth";
	this.remark = "I always pretended Mr Turner was my dad";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.SonShot = function() {
	Weapon.call(this);
	this.name = "Quick Shot";
	this.remark = "This is why we never visit...sorry Mom";
	this.damage = 4;
	this.uses = 1;
};

FamWeapon.SonSleep = function() {
	Weapon.call(this);
	this.name = "Zzzzzzzzz";
	this.remark = "(Grandpa doesn't notice the sleeping pill in his drink)";
	this.damage = 5;
	this.uses = 1;
};


//Daughter-in-law weapons
FamWeapon.DaughterInLawNoFilter = function() {
	Weapon.call(this);
	this.name = "Take the Filter Off";
	this.remark = "Why don't you slip into something more comfortable, like a coma";
	this.damage = 12;
	this.uses = 1;
};

FamWeapon.DaughterInLawBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "It's like my wedding night all over again, you probably won't remember this either";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.DaughterInLawCurse = function() {
	Weapon.call(this);
	this.name = "A Curse Upon You";
	this.remark = "Hey @#*&!-face, no one gives a @#*&!";
	this.damage = 4;
	this.uses = 1;
};

FamWeapon.DaughterInLawBomb = function() {
	Weapon.call(this);
	this.name = "Carpet Bomb";
	this.remark = "Hey traffic called, wants to see if you can go play in it";
	this.damage = 5;
	this.uses = 1;
};


/***********Grandson Weapons**************/
FamWeapon.GrandsonTruth = function() {
	Weapon.call(this);
	this.name = "The Hard Truth";
	this.remark = "I like other Grandpa better";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.GrandsonBrat = function() {
	Weapon.call(this);
	this.name = "Brat Attack";
	this.remark = "I hate it here, you don't even get HBO";
	this.damage = 8;
	this.uses = 1;
};

FamWeapon.GrandsonNoise = function() {
	Weapon.call(this);
	this.name = "White Noise";
	this.remark = "(Grandpa is annoyed by the never ending racket)";
	this.damage = 5;
	this.uses = 1;
};

FamWeapon.Grandson = function() {
	Weapon.call(this);
	this.name = "";
	this.remark = "";
	this.damage = 4;
	this.uses = 1;
};

module.exports = FamWeapon;








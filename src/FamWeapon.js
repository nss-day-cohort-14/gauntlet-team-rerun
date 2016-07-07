'use strict';

const Weapon = require('../src/weapon');

//Weapon object to hold weapon functions
const FamWeapon = {};

//Wife weapons
FamWeapon.WifeBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "Well listen to Mr Admirable here, you'd almost think he'd never run over the family dog before";
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
	this.uses = 2;
};

FamWeapon.WifeSilent = function() {
	Weapon.call(this);
	this.name = "Silent but Deadly";
	this.remark = "*** The silence is deafening ***";
	this.damage = 3;
	this.uses = 3;
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
	this.name = "The Painful Truth";
	this.remark = "Pretty ironic you were born on a highway, that's where most accidents seem to happen";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.BrotherMooch = function() {
	Weapon.call(this);
	this.name = "Mooch the Booze";
	this.remark = "(Grandpa's bourbon supply is decreased)";
	this.damage = 4;
	this.uses = 3;
};

FamWeapon.BrotherBlow = function() {
	Weapon.call(this);
	this.name = "Low Blow";
	this.remark = "";
	this.damage = 5;
	this.uses = 2;
};


//Daughter weapons
FamWeapon.DaughterBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "";
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
	this.remark = "Hey I know, let's talk about that will";
	this.damage = 4;
	this.uses = 3;
};

FamWeapon.DaughterBeam = function() {
	Weapon.call(this);
	this.name = "Tractor Beam";
	this.remark = "(Grandpa is softened by the puppy eyes)";
	this.damage = 5;
	this.uses = 2;
};


//Son weapons
FamWeapon.SonSleep = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.SonSleep = function() {
	Weapon.call(this);
	this.name = "Zzzzzzzzz";
	this.remark = "(Grandpa doesn't notice the sleeping pill in his drink)";
	this.damage = 5;
	this.uses = 2;
};


//Daughter-in-law weapons
FamWeapon.DaughterInLawNoFilter = function() {
	Weapon.call(this);
	this.name = "Take the Filter Off";
	this.remark = "Why don't you slip into something more comfortable, like a coma";
	this.damage = 12;
	this.uses = 1;
};

FamWeapon.DaughterInLawWeapon = function() {
	Weapon.call(this);
	this.name = "";
	this.remark = "";
	this.damage = 10;
	this.uses = 1;
};

FamWeapon.DaughterInLawCurse = function() {
	Weapon.call(this);
	this.name = "A Curse Upon You";
	this.remark = "Eat a bag of @#*&! then @#*&! that bag of @#*&! and eat it again";
	this.damage = 4;
	this.uses = 3;
};

FamWeapon.DaughterInLawBomb = function() {
	Weapon.call(this);
	this.name = "Carpet Bomb";
	this.remark = "Hey traffic called, wants to see if you can go play in it";
	this.damage = 5;
	this.uses = 2;
};




module.exports = FamWeapon;








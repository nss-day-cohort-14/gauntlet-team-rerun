'use strict';

const Argument = function() {
	this.grandpa = null;
	this.familyMember = null;
	function fatality(g,f) {
			if (g <= 0) {
				return 'grandpa';
			} else if (f <= 0) {
				return 'family';
			} else {
				return 'none';
			}
		}
	this.getAttack = function(damage, viciousness) {
		return damage + ((viciousness/100) + Math.floor(Math.random() * 5) + 1);
	};
	this.getDefense = function(patience, sensitivity) {
		return ((patience/10) - (sensitivity/10)) + Math.floor(Math.random() * 10) - 5;
	};
	this.fight = function() {
		// choose weapons and then pass weapons in to completeround;
		let gweap = this.grandpa.weapons[Math.floor(Math.random() * 4)];
		let x = this.familyMember.weapons.length;
		let famweap = this.familyMember.weapons.splice(Math.floor(Math.random() * x),1);
		// console.log(this.completeRound(gweap,famweap[0], x));
		// show avatars in jumpcut 3 each
		return this.completeRound(gweap,famweap[0], x);
	};
	this.completeRound = function(gweap, famweap, familyattacks) {
		let round = {};
		round.familyAttacks = familyattacks;
		let gattack = this.getAttack(gweap.damage, this.grandpa.viciousness);
		let fattack = this.getAttack(famweap.damage, this.familyMember.viciousness); 
		gattack -= this.getDefense(this.grandpa.patience, this.grandpa.sensitivity);
		fattack -= this.getDefense(this.familyMember.patience, this.familyMember.sensitivity);
		round.gweap = gweap.name;
		round.gremark = gweap.snarkyRemark;
		round.famweap = famweap.name;
		round.famremark = famweap.remark;
		this.grandpa.health -= fattack;
		round.ghealth = Math.floor(this.grandpa.health);
		this.familyMember.health -= gattack;
		round.fhealth = Math.floor(this.familyMember.health);
		round.winner = gattack > fattack ? 'grandpa' : 'family';
		round.fatality = fatality(this.grandpa.health, this.familyMember.health); 
		return round;
	};
};


module.exports = Argument;
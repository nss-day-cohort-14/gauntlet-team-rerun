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
	this.completeRound = function(gweap, famweap) {
		let round = {};
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
'use strict';

const Argument = function() {
	// grandpa and familymember are the combatants and arguers
	this.grandpa = null;
	this.familyMember = null;
	// checks to see if either grandpa or family member has died
	// as a result of health falling below zero
	function fatality(grandpaHealth,familymemberHealth) {
			if (grandpaHealth <= 0) {
				return 'grandpa';
			} else if (familymemberHealth <= 0) {
				return 'family';
			} else {
				return 'none';
			}
		}
	// damage is a weapon attribute. 
	// viciousness, patience and sensitivity are combatant attributes
	this.getAttack = function(damage, viciousness) {
		return damage + ((viciousness/100) + Math.floor(Math.random() * 5) + 1);
	};
	this.getDefense = function(patience, sensitivity) {
		return ((patience/10) - (sensitivity/10)) + Math.floor(Math.random() * 10) - 5;
	};
	// function is called by fight UI button
	this.fight = function() {
		// randomly choose weapons and then pass weapons in to this.completeround();
		let gweap = this.grandpa.weapons[Math.floor(Math.random() * 4)];
		let x = this.familyMember.weapons.length;
		let famweap = this.familyMember.weapons.splice(Math.floor(Math.random() * x),1);
		return this.completeRound(gweap,famweap[0], x);
	};
	this.completeRound = function(gweap, famweap, familyAttacks) {
		let round = {};
		// tracking attacks, when attacks reach 1 the family member is finished
		round.familyAttacks = familyAttacks;
		let gattack = this.getAttack(gweap.damage, this.grandpa.viciousness);
		let fattack = this.getAttack(famweap.damage, this.familyMember.viciousness); 
		// attacks are mitigated by defense
		gattack -= this.getDefense(this.grandpa.patience, this.grandpa.sensitivity);
		fattack -= this.getDefense(this.familyMember.patience, this.familyMember.sensitivity);
		round.gweap = gweap.name;
		round.gremark = gweap.snarkyRemark;
		round.famweap = famweap.name;
		round.famremark = famweap.remark;
		// health is reduced by attack
		this.grandpa.health -= fattack;
		round.ghealth = Math.floor(this.grandpa.health);
		this.familyMember.health -= gattack;
		round.fhealth = Math.floor(this.familyMember.health);
		round.winner = gattack > fattack ? 'grandpa' : 'family';
		round.fatality = fatality(this.grandpa.health, this.familyMember.health); 
		// round gets returned and passed into the display view
		return round;
	};
};

module.exports = Argument;
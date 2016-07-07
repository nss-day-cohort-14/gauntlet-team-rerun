'use strict';

const Grandpa = require('../src/grandpa');
const Person = require('../src/person');

const GrandpaType = {};
Grandpa.Mean = require('../src/meanGrandpa');
Grandpa.Mean.prototype = new Person();
Grandpa.Smart = require('../src/smartGrandpa');
Grandpa.Smart.prototype = new Person();
Grandpa.Drunk = require('../src/drunkGrandpa');
Grandpa.Drunk.prototype = new Person();


module.exports = Grandpa;
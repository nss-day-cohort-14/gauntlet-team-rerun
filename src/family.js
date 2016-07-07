'use strict';

const Person = require('../src/person');

const Family = {};
Family.Daughter = require('../src/daughter');
Family.Daughter.prototype = new Person();
Family.Brother = require('../src/brother');
Family.Brother.prototype = new Person();
Family.Wife = require('../src/wife');
Family.Wife.prototype = new Person();
Family.Grandson = require('../src/grandson');
Family.Grandson.prototype = new Person();
Family.Son = require('../src/son');
Family.Son.prototype = new Person();
Family.Daughter_in_law = require('../src/daughter_in_law');
Family.Daughter_in_law.prototype = new Person();

module.exports = Family;
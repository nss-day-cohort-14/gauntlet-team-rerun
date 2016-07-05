'use strict';

const $ = require('jQuery');
const header = require('../views/header.jade');
const buildScreen = require('../views/buildScreen.jade');

$('body').append(header({}));
$('body').append(buildScreen({}));


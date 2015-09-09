'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters('a','b','c')).to.not.be.undefined;
	});
	});
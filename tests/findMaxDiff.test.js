'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
        expect(functions.findMaxDiff).not.to.be.undefined;
    });
    it('should not accept invalid input', function() {
    	expect(functions.findMaxDiff).not.to.be.undefined;
	});
	
    });
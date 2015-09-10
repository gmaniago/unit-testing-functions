'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters('a','b','c')).to.not.be.undefined;
	});
	  it('should throw error when input is is not a string', function(){
    	expect(function(){functions.sortLetters(1)}).to.throw('Invalid Input');
    })
    it('letters need to be sorted in alphabetical order', function() {
        expect(functions.sortLetters('rgtn')).to.equal('gnrt');
    });
	});
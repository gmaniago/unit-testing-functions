'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should not exist', function() {
		expect(absVal).to.not.be.undefined;
	});
		it('should exist', function() {
        expect(functions.absVal).not.to.be.undefined;
    });
    it('should throw an error if the input is not a number', function(){
    	expect(function(){functions.absVal('a')}).to.throw('Invalid Input');
    })
	});
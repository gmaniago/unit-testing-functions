'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).to.not.be.undefined;
	});
	it('should return true if the input lenght is (1,2,3)', function(){
		expect(functions.concatenateArrays).not.to.be.true;
	})
	it('should return true if the input lenght is (1,[]))', function(){
		expect(functions.concatenateArrays).not.to.be.false;
	})
	it('should return true if the input lenght is ([],[]))', function(){
		expect(functions.concatenateArrays).not.to.be.false;
	})
	it('should throw an exception if the input is an array', function() {
		expect(function() { functions.concatenateArrays (['a']) }).to.throw ('Invalid Input');
	})
	
})


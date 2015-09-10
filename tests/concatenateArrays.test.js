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
	it('should return a new array, joining arrays a and b', function(){
		expect(functions.concatenateArrays(['a','b','c'],['d','e','f','g'])).to.eql(['a','b','c','d','e','f','g']);
	});
	it('should throw an exception if the input is invalid',function(){
		expect(function(){functions.concatenateArrays(['a'])}).to.throw('invalid input');
	});
	
})


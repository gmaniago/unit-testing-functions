'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('checkData', function() {
	it('should not exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true if the input lenght is "abc"', function(){
		expect(functions.checkData).not.to.be.true;
	})
	it('should return true if the input lenght is "abcd"', function(){
		expect(functions.checkData).not.to.be.false;
	})
	it('should throw an exception if the input is an array', function() {
		expect(function() { functions.checkData (['a']) }).to.throw ('Invalid Input');
	})
	
})


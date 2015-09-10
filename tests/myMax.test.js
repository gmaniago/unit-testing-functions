'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax',function(){
	it('should throw an error if argument is a string',function(){
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should throw an error if argument is a string',function(){
		expect(function(){functions.myMax('11223344') }).to.throw('Invalid Input');
	});
	it('should throw an error if argument is an array',function(){
		expect(function(){functions.myMax([3,4,5,6]) }).to.throw('Invalid Input');
	});	

});
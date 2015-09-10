'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin',function(){
	it('should throw an error if argument is a string',function(){
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should throw an error if argument is a string',function(){
		expect(function(){functions.myMin('11223344') }).to.throw('Invalid Input');
	});
	it('should throw an error if argument is an array',function(){
		expect(function(){functions.myMin([6,5,4,3]) }).to.throw('Invalid Input');
	});	

});
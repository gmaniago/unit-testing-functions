'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
        expect(functions.getMonth).not.to.be.undefined;
    });
    it('should throw an exception when the agrument given is not an integer', function() {
		expect(function() {functions.getMonth(1) }).to.throw('Invalid Input');
	});
	it('should throw an error if argument is an array',function(){
		expect(function(){functions.getMonth([2,3]) }).to.throw('Invalid Input');
	});
	it('should throw an error if argument is a string',function(){
		expect(function(){functions.getMonth('March','April','May') }).to.throw('Invalid Input');
	});
	it('should throw an error if argument are letters',function(){
		expect(function(){functions.getMonth([a,b,c,d]) }).to.throw('Invalid Input');
	});
    });
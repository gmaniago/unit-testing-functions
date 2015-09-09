'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun('Gladys')).to.be.true;
	});
	it('should not accept invalid input', function() {
		expect(functions.fixProperNoun).to.not.be.undefined;
	});
	it('should return the proper case', function() {
		expect(fixProperNoun('gladys')).to.equal('Gladys');
	});
	it('should return the proper case if third character is upper case', function() {
		expect(fixProperNoun('alFred')).to.equal('alFred');
	});
	it('should return the proper case if the last character is upper case', function() {
		expect(fixProperNoun('marY')).to.equal('Mary');
	});
	it('should return the proper case if the fourth letter is a upper case', function() {
		expect(fixProperNoun('dilLon')).to.equal('Dillon');
	});
	it('should throw an exception if the input are numbers', function() {
		expect(function() { functions.fixProperNoun (['GLADY23S']) }).to.throw ('Invalid Input');
	})
	});

		
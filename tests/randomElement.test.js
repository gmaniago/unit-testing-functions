'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElements', function() {
	it('should exist', function() {
		expect(functions.sortLetters).to.not.be.undefined;
	});
	it('should return an element from the array that is passed in', function() {
		var elements = ['a','b','cc'];
		for(var i =0; i < 1000; i++){
		var randomEl = functions.randomElements(elements);
		expect(elements.indexof(randomEl)).to.be.above(-1);
		}
	});
    });

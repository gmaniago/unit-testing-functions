'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
        expect(functions.studentPairs).not.to.be.undefined;
    });
    it('should return an array', function() {
        expect(functions.studentPairs(['a','b'])).to.be.instanceof(Array);
    });
    it('should not accpet an empty input', function() {
        expect(funtion()) {(functions.studentPairs('g')}).not.to.be.undefined);
    });
    });
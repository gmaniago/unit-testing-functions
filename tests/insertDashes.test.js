'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
        expect(functions.insertDashes).not.to.be.undefined;
    });
    it('it should put dashes in between undashed words', function() {
        expect(functions.insertDashes('dashes')).to.be.equal('d-a-s-h-e-s')
    });
    it('it should put dashes in between undashed numbers', function() {
        expect(functions.insertDashes('12345')).to.be.equal('1-2-3-4-5')
    });
    });
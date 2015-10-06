'use strict';

var negBinAdd = require('../../toolbox/negBinAdd');
var expect = require('chai').expect;

describe('negBinAdd - O(n)', function(){
  it('should add negative numbers', function() {
    expect(negBinAdd([0, 1], [1, 0, 1, 1])).to.be.deep.equal([1, 1, 1, 1]);
  });

  it('should add positive numbers', function() {
    expect(negBinAdd([0, 1, 1], [1, 1, 1])).to.be.deep.equal([1, 0, 1]);
  });

  it('should add opposite numbers', function() {
    expect(negBinAdd([1, 0, 1, 1], [1, 1, 1])).to.be.deep.equal([]);
  });

  it('should add positive and negative numbers', function() {
    expect(negBinAdd([1, 0, 1, 1], [0, 1, 1])).to.be.deep.equal([1, 1]);
  });
});
'use strict';

var maxSlice = require('../../toolbox/maxSlice');
var expect = require('chai').expect;

describe('maxSlice - O(n)', function() {
  it('should return the sum of a max slice if negative and positive values', function() {
    expect(maxSlice([5, -7, 3, 5, -2, 4, -1])).to.be.equal(10);
  });
  
  it('should return the sum of an entire array if positive values', function() {
    expect(maxSlice([1, 5, 7, 10])).to.be.equal(23);
    expect(maxSlice([10, 7, 5, 1])).to.be.equal(23);
    expect(maxSlice([10, 5, 7, 1])).to.be.equal(23);  
  });
  
  it('should return 0 if negative values', function() {
    expect(maxSlice([-1, -5, -7, -10])).to.be.equal(0);
    expect(maxSlice([-10, -7, -5, -1])).to.be.equal(0);
    expect(maxSlice([-10, -5, -7, -1])).to.be.equal(0);  
  });
  
  it('should return 0 if an empty array', function() {
    expect(maxSlice([])).to.be.equal(0);
  });
});
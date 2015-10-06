'use strict';

var suffixes = require('../../toolbox/suffixes');
var expect = require('chai').expect;

describe('suffixes - O(n)', function() {
  it('should return an array with the length equals to `A.length + 1`', function() {
    expect(suffixes([1, 2, 3]).length).to.be.equal(4);
    expect(suffixes([1, 2]).length).to.be.equal(3);
    expect(suffixes([1]).length).to.be.equal(2);
  });
  
  it('should sum preceding values', function() {
    expect(suffixes([4, 5, 6])).to.be.deep.equal([15, 11, 6, 0]);
    expect(suffixes([5, 7])).to.be.deep.equal([12, 7, 0]);
    expect(suffixes([5])).to.be.deep.equal([5, 0]);
  });
  
  it('should return an one element array if an empty array', function() {
    expect(suffixes([])).to.be.deep.equal([0]);
  });
  
  it('should allow to calculate a sum of the slice - O(1)', function() {
    var S = suffixes([1,2,3]);
    
    var start = 0;
    var end = 1;
    var sum = S[start] - S[end + 1];
    
    expect(sum).to.be.equal(3);
  });
});
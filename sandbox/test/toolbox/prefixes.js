'use strict';

var prefixes = require('../../toolbox/prefixes');
var expect = require('chai').expect;

describe('prefixes - O(n)', function() {
  it('should return an array with the length equals to `A.length + 1`', function() {
    expect(prefixes([1, 2, 3]).length).to.be.equal(4);
    expect(prefixes([1, 2]).length).to.be.equal(3);
    expect(prefixes([1]).length).to.be.equal(2);
  });
  
  it('should sum preceding values', function() {
    expect(prefixes([1, 2, 3])).to.be.deep.equal([0, 1, 3, 6]);
    expect(prefixes([5, 7])).to.be.deep.equal([0, 5, 12]);
    expect(prefixes([5])).to.be.deep.equal([0, 5]);
  });
  
  it('should return an one element array if an empty array', function() {
    expect(prefixes([])).to.be.deep.equal([0]);
  });
  
  it('should allow to calculate a sum of the slice - O(1)', function() {
    var P = prefixes([1,2,3]);
    
    var start = 0;
    var end = 1;
    var sum = P[end + 1] - P[start];
    
    expect(sum).to.be.equal(3);
  });
});
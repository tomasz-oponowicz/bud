'use strict';

var max = require('../../toolbox/max');
var expect = require('chai').expect;

describe('max - O(n)', function(){
  it('should find the biggest value if asc order', function(){
    expect(max([1, 2, 3])).to.be.equal(3);
    expect(max([1, 5, 7, 10])).to.be.equal(10);  
  });
  
  it('should find the biggest value if dsc order', function(){
    expect(max([3, 2, 1])).to.be.equal(3);
    expect(max([10, 7, 5, 1])).to.be.equal(10);  
  });
  
  it('should find the biggest value if random order', function(){
    expect(max([3, 1, 2])).to.be.equal(3);
    expect(max([5, 10, 7, 1])).to.be.equal(10);  
  });
  
  it('should return the `-Infinity` if an empty array', function(){
    expect(max([])).to.be.equal(-Infinity);
  });
  
  it('should return the first element if an one element array', function(){
    expect(max([3])).to.be.equal(3);
  });
});
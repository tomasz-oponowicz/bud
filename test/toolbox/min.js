'use strict';

var min = require('../../toolbox/min');
var expect = require('chai').expect;

describe('min - O(n)', function(){
  it('should find the smallest value if asc order', function(){
    expect(min([1, 2, 3])).to.be.equal(1);
    expect(min([2, 5, 7, 10])).to.be.equal(2);  
  });
  
  it('should find the smallest value if dsc order', function(){
    expect(min([3, 2, 1])).to.be.equal(1);
    expect(min([10, 7, 5, 2])).to.be.equal(2);  
  });
  
  it('should find the smallest value if random order', function(){
    expect(min([3, 1, 2])).to.be.equal(1);
    expect(min([5, 10, 7, 2])).to.be.equal(2);  
  });
  
  it('should return the `Infinity` if an empty array', function(){
    expect(min([])).to.be.equal(Infinity);
  });
  
  it('should return the first element if an one element array', function(){
    expect(min([3])).to.be.equal(3);
  });
});
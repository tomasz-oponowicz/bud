'use strict';

var binarySearch1 = require('../../toolbox/binarySearch1');
var expect = require('chai').expect;

describe('binarySearch1 - O(log n)', function(){
  it('should return an index if found', function(){
    expect(binarySearch1([1, 2, 3, 4], 1)).to.be.equal(0);
    expect(binarySearch1([1, 2, 3, 4], 2)).to.be.equal(1);
    expect(binarySearch1([1, 2, 3, 4], 3)).to.be.equal(2);
    expect(binarySearch1([1, 2, 3, 4], 4)).to.be.equal(3);
  });
  
  it('should return an index of the first occurrence if found', function(){
    expect(binarySearch1([1, 2, 2, 3, 4], 2)).to.be.equal(1);
    expect(binarySearch1([1, 2, 2, 2, 3, 4], 2)).to.be.equal(1);
    expect(binarySearch1([1, 2, 2, 2, 2, 3, 4], 2)).to.be.equal(1);
  });
  
  it('should return -1 if not found', function(){
    expect(binarySearch1([1, 2, 3, 4], 0)).to.be.equal(-1);
    expect(binarySearch1([1, 2, 3, 4], 5)).to.be.equal(-1);
  });
  
  it('should return -1 if an empty array', function(){
    expect(binarySearch1([], 0)).to.be.equal(-1);
  });
});
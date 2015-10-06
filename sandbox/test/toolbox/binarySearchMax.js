'use strict';

var binarySearchMax = require('../../toolbox/binarySearchMax');
var expect = require('chai').expect;

describe('binarySearchMax - O(log n)', function(){
  it('should maximize result in the specified range ', function(){
    expect(binarySearchMax(10, function(beg, mid, end) {
      return mid >= 5;
    })).to.be.equal(10);

    expect(binarySearchMax(10, function(beg, mid, end) {
      return mid <= 5;
    })).to.be.equal(5);
  });
});
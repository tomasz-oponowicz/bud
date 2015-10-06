'use strict';

var binarySearchMin = require('../../toolbox/binarySearchMin');
var expect = require('chai').expect;

describe('binarySearchMin - O(log n)', function(){
  it('should minimize result in the specified range ', function(){
    expect(binarySearchMin(10, function(beg, mid, end) {
      return mid >= 5;
    })).to.be.equal(5);

    expect(binarySearchMin(10, function(beg, mid, end) {
      return mid <= 5;
    })).to.be.equal(1);
  });
});
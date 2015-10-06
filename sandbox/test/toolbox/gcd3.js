'use strict';

var gcd3 = require('../../toolbox/gcd3');
var expect = require('chai').expect;

describe('gcd3 - O(log n)', function(){
  it('should find the greatest commom divisor if `a > b`', function(){
    expect(gcd3(30, 15, 1)).to.be.equal(15);
    expect(gcd3(12, 8, 1)).to.be.equal(4);
    expect(gcd3(54, 24, 1)).to.be.equal(6);  
  });
  
  it('should find the greatest commom divisor if `a < b`', function(){
    expect(gcd3(15, 30, 1)).to.be.equal(15);
    expect(gcd3(8, 12, 1)).to.be.equal(4);
    expect(gcd3(24, 54, 1)).to.be.equal(6);  
  });
});
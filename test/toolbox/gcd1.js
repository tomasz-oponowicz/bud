'use strict';

var gcd1 = require('../../toolbox/gcd1');
var expect = require('chai').expect;

describe('gcd1 - O(n)', function(){
  it('should find the greatest commom divisor if `a > b`', function(){
    expect(gcd1(30, 15)).to.be.equal(15);
    expect(gcd1(12, 8)).to.be.equal(4);
    expect(gcd1(54, 24)).to.be.equal(6);  
  });
  
  it('should find the greatest commom divisor if `a < b`', function(){
    expect(gcd1(15, 30)).to.be.equal(15);
    expect(gcd1(8, 12)).to.be.equal(4);
    expect(gcd1(24, 54)).to.be.equal(6);  
  });
});
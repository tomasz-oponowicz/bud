'use strict';

var gcd2 = require('../../toolbox/gcd2');
var expect = require('chai').expect;

describe('gcd2 - O(log a + b)', function(){
  it('should find the greatest commom divisor if `a > b`', function(){
    expect(gcd2(30, 15)).to.be.equal(15);
    expect(gcd2(12, 8)).to.be.equal(4);
    expect(gcd2(54, 24)).to.be.equal(6);  
  });
});
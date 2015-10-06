'use strict';

var divisorsCount = require('../../toolbox/divisorsCount');
var expect = require('chai').expect;

describe('divisorsCount - O(log n)', function(){
  it('should return divisors count if a positive value', function(){
    expect(divisorsCount(36)).to.be.equal(9);
    expect(divisorsCount(2)).to.be.equal(2);
    expect(divisorsCount(1)).to.be.equal(1);
    expect(divisorsCount(10)).to.be.equal(4);
  });
  
  it('should return zero if a negative value', function(){
    expect(divisorsCount(-1)).to.be.equal(0);
    expect(divisorsCount(-10)).to.be.equal(0);
  });
  
  it('should return zero if zero', function(){
    expect(divisorsCount(0)).to.be.equal(0);
  });
});
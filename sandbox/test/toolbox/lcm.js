'use strict';

var lcm = require('../../toolbox/lcm');
var expect = require('chai').expect;

describe('lcm - O(log a + b)', function(){
  it('should find the least common multiple if `a > b`', function(){
    expect(lcm(4, 3)).to.be.equal(12);  
  });
  
  it('should find the least common multiple if more than 2 arguments', function(){
    expect(lcm(lcm(21, 9), 8)).to.be.equal(504); // chain
  });
});
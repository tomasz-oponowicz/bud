'use strict';

var fibonacci1 = require('../../toolbox/fibonacci1');
var expect = require('chai').expect;

describe('fibonacci1 - O(n), recursion', function(){
  it('should find the n-th fibonacci number', function(){
    expect(fibonacci1(0)).to.be.equal(0);
    expect(fibonacci1(1)).to.be.equal(1);
    expect(fibonacci1(2)).to.be.equal(1);
    expect(fibonacci1(3)).to.be.equal(2);
    expect(fibonacci1(4)).to.be.equal(3);
    expect(fibonacci1(5)).to.be.equal(5);
    expect(fibonacci1(6)).to.be.equal(8);  
  });
});
'use strict';

var fibonacci2 = require('../../toolbox/fibonacci2');
var expect = require('chai').expect;

describe('fibonacci2 - O(n)', function(){
  it('should find the n-th fibonacci number', function(){
    expect(fibonacci2(0)).to.be.equal(0);
    expect(fibonacci2(1)).to.be.equal(1);
    expect(fibonacci2(2)).to.be.equal(1);
    expect(fibonacci2(3)).to.be.equal(2);
    expect(fibonacci2(4)).to.be.equal(3);
    expect(fibonacci2(5)).to.be.equal(5);
    expect(fibonacci2(6)).to.be.equal(8);  
  });
});
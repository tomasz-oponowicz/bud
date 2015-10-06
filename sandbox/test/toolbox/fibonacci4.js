'use strict';

var fibonacci4 = require('../../toolbox/fibonacci4');
var expect = require('chai').expect;

describe('fibonacci4 - O(1)', function(){
  it('should find the n-th fibonacci number', function(){
    expect(fibonacci4(0)).to.be.equal(0);
    expect(fibonacci4(1)).to.be.equal(1);
    expect(fibonacci4(2)).to.be.equal(1);
    expect(fibonacci4(3)).to.be.equal(2);
    expect(fibonacci4(4)).to.be.equal(3);
    expect(fibonacci4(5)).to.be.equal(5);
    expect(fibonacci4(6)).to.be.equal(8);
    expect(fibonacci4(11)).to.be.equal(89);  
  });
});
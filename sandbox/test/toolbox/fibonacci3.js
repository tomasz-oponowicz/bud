'use strict';

var fibonacci3 = require('../../toolbox/fibonacci3');
var expect = require('chai').expect;

describe('fibonacci3 - O(n)', function(){
  it('should find the n-th fibonacci number', function(){
    expect(fibonacci3(0)).to.be.equal(0);
    expect(fibonacci3(1)).to.be.equal(1);
    expect(fibonacci3(2)).to.be.equal(1);
    expect(fibonacci3(3)).to.be.equal(2);
    expect(fibonacci3(4)).to.be.equal(3);
    expect(fibonacci3(5)).to.be.equal(5);
    expect(fibonacci3(6)).to.be.equal(8);  
  });
});
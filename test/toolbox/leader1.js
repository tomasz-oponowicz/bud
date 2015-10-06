'use strict';

var leader1 = require('../../toolbox/leader1');
var expect = require('chai').expect;

describe('leader1 - O(n log n)', function(){
  it('should return leader if found', function(){
    expect(leader1([6, 8, 4, 6, 8, 6, 6])).to.be.equal(6);
  });
  
  it('should return -1 if not found', function(){
    expect(leader1([1, 2, 3])).to.be.equal(-1);
    expect(leader1([1, 5, 7, 10])).to.be.equal(-1);
    expect(leader1([6, 8, 4, 6, 8, 6])).to.be.equal(-1);  
  });
  
  it('should return -1 if an empty array', function(){
    expect(leader1([])).to.be.equal(-1);
  });
});
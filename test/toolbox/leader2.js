'use strict';

var leader2 = require('../../toolbox/leader2');
var expect = require('chai').expect;

describe('leader2 - O(n)', function(){
  it('should return leader if found', function(){
    expect(leader2([6, 8, 4, 6, 8, 6, 6])).to.be.equal(6);
  });
  
  it('should return -1 if not found', function(){
    expect(leader2([1, 2, 3])).to.be.equal(-1);
    expect(leader2([1, 5, 7, 10])).to.be.equal(-1);
    expect(leader2([6, 8, 4, 6, 8, 6])).to.be.equal(-1);  
  });
  
  it('should return -1 if an empty array', function(){
    expect(leader2([])).to.be.equal(-1);
  });
});
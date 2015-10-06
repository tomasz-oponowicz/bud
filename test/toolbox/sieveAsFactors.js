'use strict';

var sieveAsFactors = require('../../toolbox/sieveAsFactors');
var expect = require('chai').expect;

describe('sieveAsFactors - O(n log log n)', function(){  
  it('should return factors for composite and prime numbers', function(){
    expect(sieveAsFactors(2)).to.be.deep.equal([0, 0, 0]);
    expect(sieveAsFactors(3)).to.be.deep.equal([0, 0, 0, 0]);
    expect(sieveAsFactors(4)).to.be.deep.equal([0, 0, 0, 0, 2]);
    expect(sieveAsFactors(5)).to.be.deep.equal([0, 0, 0, 0, 2, 0]);
    expect(sieveAsFactors(6)).to.be.deep.equal([0, 0, 0, 0, 2, 0, 2]);
  });
});
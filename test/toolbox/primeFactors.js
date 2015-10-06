'use strict';

var primeFactors = require('../../toolbox/primeFactors');
var expect = require('chai').expect;

describe('primeFactors - O(log n)', function(){  
  it('should return factors for a composite number', function(){
    expect(primeFactors(10)).to.be.deep.equal([2, 5]);
    expect(primeFactors(30)).to.be.deep.equal([2, 3, 5]);
  });
  
  it('should return an one factor for a prime number', function(){
    expect(primeFactors(2)).to.be.deep.equal([2]);
    expect(primeFactors(3)).to.be.deep.equal([3]);
    expect(primeFactors(13)).to.be.deep.equal([13]);
  });
  
  it('should not include 1 as factor', function(){
    expect(primeFactors(2)).to.not.include(1);
    expect(primeFactors(3)).to.not.include(1);
    expect(primeFactors(10)).to.not.include(1);
    expect(primeFactors(30)).to.not.include(1);
  });
});
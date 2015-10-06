'use strict';

var isPrime = require('../../toolbox/isPrime');
var expect = require('chai').expect;

describe('isPrime - O(sqrt(n))', function(){
  it('should return true if a prime number', function(){
    expect(isPrime(2)).to.be.ok;
    expect(isPrime(3)).to.be.ok;
    expect(isPrime(5)).to.be.ok;
    expect(isPrime(53)).to.be.ok;
  });
  
  it('should return false if a composite number', function(){
    expect(isPrime(4)).to.not.be.ok;
    expect(isPrime(9)).to.not.be.ok;
    expect(isPrime(10)).to.not.be.ok;
    expect(isPrime(16)).to.not.be.ok;
  });
});
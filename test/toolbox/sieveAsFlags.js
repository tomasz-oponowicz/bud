'use strict';

var sieveAsFlags = require('../../toolbox/sieveAsFlags');
var expect = require('chai').expect;

describe('sieveAsFlags - O(n log log n)', function(){  
  it('should return flags for composite and prime numbers', function(){
    expect(sieveAsFlags(2)).to.be.deep.equal([false, false, true]);
    expect(sieveAsFlags(3)).to.be.deep.equal([false, false, true, true]);
    expect(sieveAsFlags(4)).to.be.deep.equal([false, false, true, true, false]);
    expect(sieveAsFlags(5)).to.be.deep.equal([false, false, true, true, false, true]);
    expect(sieveAsFlags(6)).to.be.deep.equal([false, false, true, true, false, true, false]);
  });
});
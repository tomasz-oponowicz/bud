'use strict';

////////////////
// SOLUTION 1 //
////////////////

function solution(x) {
  return x;
}

var expect = require('chai').expect;

describe('solution 3', function(){
  it('#1.1', function(){
    expect(10e7).to.be.equal(100000000);
  });
  it('#1.2', function(){
    expect(solution(1)).to.be.equal(1);
  });
});
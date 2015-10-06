'use strict';

var negBin = require('../../toolbox/negBin');
var expect = require('chai').expect;

describe('negBin - O(n)', function(){
  it('should convert odd decimal', function(){
    expect(negBin(6)).to.be.deep.equal([0, 1, 0, 1, 1]);
  });

  it('should convert even decimal', function(){
    expect(negBin(4)).to.be.deep.equal([0, 0, 1]);
  });

  it('should convert negative odd decimal', function(){
    expect(negBin(-3)).to.be.deep.equal([1, 0, 1, 1]);
  });

  it('should convert negative even decimal', function(){
    expect(negBin(-4)).to.be.deep.equal([0, 0, 1, 1]);
  });
});
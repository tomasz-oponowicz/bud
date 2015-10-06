'use strict';

var negBinSub = require('../../toolbox/negBinSub');
var expect = require('chai').expect;

describe('negBinSub - O(n)', function(){
  it('should subtract negative numbers', function() {
    expect(negBinSub([0, 1], [1, 0, 1, 1])).to.be.deep.equal([1]);
  });

  it('should subtract positive numbers', function() {
    expect(negBinSub([0, 1, 1], [1, 1, 1])).to.be.deep.equal([1, 1]);
    expect(negBinSub([1, 1, 1], [0, 1, 1])).to.be.deep.equal([1]);
  });

  it('should subtract positive and negative numbers', function() {
    expect(negBinSub([0, 1], [1, 1, 1])).to.be.deep.equal([1, 1, 1, 1]);
    expect(negBinSub([1, 1, 1], [0, 1])).to.be.deep.equal([1, 0, 1]);
  });
});
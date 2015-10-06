'use strict';

var quickSortDsc = require('../../toolbox/quickSortDsc');
var expect = require('chai').expect;

describe('quickSortDsc - O(n log n)', function() {
  it('should sort asc sequence', function(){
    expect(quickSortDsc([1, 2, 3])).to.be.deep.equal([3, 2, 1]);
    expect(quickSortDsc([1, 5, 7, 10])).to.be.deep.equal([10, 7, 5, 1]);  
  });
  
  it('should sort dsc sequence', function(){
    expect(quickSortDsc([3, 2, 1])).to.be.deep.equal([3, 2, 1]);
    expect(quickSortDsc([10, 7, 5, 1])).to.be.deep.equal([10, 7, 5, 1]);  
  });
  
  it('should sort random sequence', function(){
    expect(quickSortDsc([3, 1, 2])).to.be.deep.equal([3, 2, 1]);
    expect(quickSortDsc([5, 10, 7, 1])).to.be.deep.equal([10, 7, 5, 1]);  
  });
  
  it('should accept an empty array', function() {
    expect(quickSortDsc([])).to.be.deep.equal([]);
  });
});
'use strict';

var quickSortAsc = require('../../toolbox/quickSortAsc');
var expect = require('chai').expect;

describe('quickSortAsc - O(n log n)', function() {
  it('should sort asc sequence', function(){
    expect(quickSortAsc([1, 2, 3])).to.be.deep.equal([1, 2, 3]);
    expect(quickSortAsc([1, 5, 7, 10])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort dsc sequence', function(){
    expect(quickSortAsc([3, 2, 1])).to.be.deep.equal([1, 2, 3]);
    expect(quickSortAsc([10, 7, 5, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort random sequence', function(){
    expect(quickSortAsc([3, 1, 2])).to.be.deep.equal([1, 2, 3]);
    expect(quickSortAsc([5, 10, 7, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should accept an empty array', function() {
    expect(quickSortAsc([])).to.be.deep.equal([]);
  });
});
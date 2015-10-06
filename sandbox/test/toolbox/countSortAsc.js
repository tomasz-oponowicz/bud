'use strict';

var countSortAsc = require('../../toolbox/countSortAsc');
var expect = require('chai').expect;

describe('countSortAsc - O(n + k)', function() {
  it('should sort asc sequence', function(){
    expect(countSortAsc([1, 2, 3], 3)).to.be.deep.equal([1, 2, 3]);
    expect(countSortAsc([1, 5, 7, 10], 10)).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort dsc sequence', function(){
    expect(countSortAsc([3, 2, 1], 3)).to.be.deep.equal([1, 2, 3]);
    expect(countSortAsc([10, 7, 5, 1], 10)).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort random sequence', function(){
    expect(countSortAsc([3, 1, 2], 3)).to.be.deep.equal([1, 2, 3]);
    expect(countSortAsc([5, 10, 7, 1], 10)).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should accept an empty array', function() {
    expect(countSortAsc([], 0)).to.be.deep.equal([]);
  });
  
  it('should not support negative values', function() {
    expect(countSortAsc([-1, -2], -1)).to.be.deep.equal([]);
  });
});
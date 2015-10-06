'use strict';

var mergeSort = require('../../toolbox/mergeSort');
var expect = require('chai').expect;

describe('mergeSort - O(n log n), recursive', function() {
  it('should sort asc sequence', function(){
    expect(mergeSort([1, 2, 3])).to.be.deep.equal([1, 2, 3]);
    expect(mergeSort([1, 5, 7, 10])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort dsc sequence', function(){
    expect(mergeSort([3, 2, 1])).to.be.deep.equal([1, 2, 3]);
    expect(mergeSort([10, 7, 5, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort random sequence', function(){
    expect(mergeSort([3, 1, 2])).to.be.deep.equal([1, 2, 3]);
    expect(mergeSort([5, 10, 7, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should accept an empty array', function() {
    expect(mergeSort([])).to.be.deep.equal([]);
  });
});
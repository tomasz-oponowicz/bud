'use strict';

var selectSort = require('../../toolbox/selectSort');
var expect = require('chai').expect;

describe('selectSort - O(n^2)', function() {
  it('should sort asc sequence', function(){
    expect(selectSort([1, 2, 3])).to.be.deep.equal([1, 2, 3]);
    expect(selectSort([1, 5, 7, 10])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort dsc sequence', function(){
    expect(selectSort([3, 2, 1])).to.be.deep.equal([1, 2, 3]);
    expect(selectSort([10, 7, 5, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should sort random sequence', function(){
    expect(selectSort([3, 1, 2])).to.be.deep.equal([1, 2, 3]);
    expect(selectSort([5, 10, 7, 1])).to.be.deep.equal([1, 5, 7, 10]);  
  });
  
  it('should accept an empty array', function() {
    expect(selectSort([])).to.be.deep.equal([]);
  });
});
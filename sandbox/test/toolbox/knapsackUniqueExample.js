'use strict';

var knapsackUniqueExample = require('../../toolbox/knapsackUniqueExample');
var expect = require('chai').expect;

describe('knapsackUniqueExample - O(n*m)', function(){
  it('should return a maximized value of items', function(){
    expect(knapsackUniqueExample([3, 2, 1], [5, 3, 4], 5)).to.be.equal(9);
  });
});
'use strict';

var knapsackRepeatExample = require('../../toolbox/knapsackRepeatExample');
var expect = require('chai').expect;

describe('knapsackRepeatExample - O(n*m)', function(){
  it('should return a maximized value of items', function(){
    expect(knapsackRepeatExample([3, 2, 1], [5, 3, 4], 5)).to.be.equal(20);
  });
});
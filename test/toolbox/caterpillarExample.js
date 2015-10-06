'use strict';

var caterpillarExample = require('../../toolbox/caterpillarExample');
var expect = require('chai').expect;

describe('caterpillarExample - O(n)', function(){
  it('should find the exact sum if exists', function(){
    expect(caterpillarExample([6, 2, 7, 4, 1, 3, 6], 12)).to.be.ok;
    expect(caterpillarExample([4, 1, 3, 6], 9)).to.be.ok;
  });
  
  it('should not find the exact sum if not exist', function(){
    expect(caterpillarExample([6, 2, 7, 4], 5)).to.be.not.ok;
    expect(caterpillarExample([4, 1, 3, 6], 20)).to.be.not.ok;
  });
});
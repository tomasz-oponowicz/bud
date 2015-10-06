'use strict';

var count = require('../../toolbox/count');
var expect = require('chai').expect;

describe('count - O(n)', function(){
  it('should return an array with the length equals to `m + 1`', function(){
    var result = count([1,2,3], 3);
    expect(result.length).to.be.equal(4); 
  });
  
  it('should contain the `undefined` if no occurrences', function(){
    var result = count([1,2,3], 3);
    expect(result[0]).to.equal(undefined);
    expect(result[1]).to.not.equal(undefined);
    expect(result[2]).to.not.equal(undefined);
    expect(result[3]).to.not.equal(undefined);
  });
  
  it('should contain a number if occurrences', function(){
    expect(count([1,2,3], 3)).to.deep.equal([ , 1, 1, 1]);
    expect(count([2,2,2], 3)).to.deep.equal([ ,  , 3,  ]);
  });
  
  it('should process an array longer than a `m`', function(){
    expect(count([3,3,3,3,3], 3)).to.deep.equal([ , , , 5]);
  });
  
  it('should process an array shorter than a `m`', function(){
    expect(count([3], 3)).to.deep.equal([ , , , 1]);
  });
  
  it('should return a `undefined` filled array if an empty array', function(){
    expect(count([], 3)).to.deep.equal([ , , , ]);
  });
  
  it('should not support negative values', function() {
    expect(count([-1, -2], -1).length).to.be.equal(0);
  });
});
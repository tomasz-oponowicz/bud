'use strict';

var toolbox = require('../toolbox');
var expect = require('chai').expect;

describe('stack - O(1)', function() {
  it('should add new elements at the top', function() {
    var A = [9];
    
    expect(A.length).to.be.equal(1);
    
    A.push(10); /* APPEND */
    
    expect(A.length).to.be.equal(2);
    expect(A[A.length - 1]).to.be.equal(10);
  });
  
  it('should delete elements from the top', function() {
    var A = [9, 10], a;
    
    expect(A.length).to.be.equal(2);
    expect(A[A.length - 1]).to.be.equal(10);
    
    a = A.pop(); /* GET */
    
    expect(a).to.be.equal(10);
    expect(A.length).to.be.equal(1);
    expect(A[A.length - 1]).to.be.equal(9);
  });
  
  it('should provide size', function() {
    var A = [9, 10], l;
    
    l = A.length; /* SIZE */
    
    expect(l).to.be.equal(2);
  });
  
  it('should ignore deleting elements if empty', function() {
    var A = [], a;
    
    a = A.pop(); /* undefined if empty */
    
    expect(a).to.be.undefined;
    expect(A.length).to.be.equal(0);
  });
});
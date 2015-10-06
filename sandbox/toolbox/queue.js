'use strict';

var toolbox = require('../toolbox');
var expect = require('chai').expect;

describe('queue - O(1)', function() {
  it('should add new elements at the back', function() {
    var A = [9];
    
    expect(A.length).to.be.equal(1);
    
    A.push(10); /* APPEND */
    
    expect(A.length).to.be.equal(2);
    expect(A[A.length - 1]).to.be.equal(10);
  });
  
  it('should delete elements from the front', function() {
    var A = [9, 10], a;
    
    expect(A.length).to.be.equal(2);
    expect(A[0]).to.be.equal(9);
    
    a = A.shift(); /* GET */
    
    expect(a).to.be.equal(9);
    expect(A.length).to.be.equal(1);
    expect(A[A.length - 1]).to.be.equal(10);
  });
  
  it('should provide size', function() {
    var A = [9, 10], l;
    
    l = A.length; /* SIZE */
    
    expect(l).to.be.equal(2);
  });
  
  it('should ignore deleting elements if empty', function() {
    var A = [], a;
    
    a = A.shift(); /* undefined if empty */
    
    expect(a).to.be.undefined;
    expect(A.length).to.be.equal(0);
  });
});
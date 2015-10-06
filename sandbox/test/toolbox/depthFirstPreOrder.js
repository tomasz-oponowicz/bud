'use strict';

var preorder = require('../../toolbox/depthFirstPreOrder');
var expect = require('chai').expect;

describe('depthFirstPreOrder - O(n)', function(){
  it('should return items in right order', function(){
    var T = { 
      x: 'F',
      l: {
        x: 'B',
        l: {x: 'A'},
        r: {
          x: 'D',
          l: {x: 'C'},
          r: {x: 'E'}
        }
      },
      r: {
        x: 'G',
        r: {
          x: 'I',
          l: {x: 'H'}
        }
      }
    };
      
    var A = [];
    preorder(T, function(node) {
      A.push(node.x);
    });

    expect(A).to.be.deep.equal(['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']);
  });
});
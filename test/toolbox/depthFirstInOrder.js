'use strict';

var inorder = require('../../toolbox/depthFirstInOrder');
var expect = require('chai').expect;

describe('depthFirstInOrder - O(n)', function(){
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
    inorder(T, function(node) {
      A.push(node.x);
    });

    expect(A).to.be.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
  });
});
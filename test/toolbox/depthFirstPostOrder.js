'use strict';

var postorder = require('../../toolbox/depthFirstPostOrder');
var expect = require('chai').expect;

describe('depthFirstPostOrder - O(n)', function(){
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
    postorder(T, function(node) {
      A.push(node.x);
    });

    expect(A).to.be.deep.equal(['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']);
  });
});
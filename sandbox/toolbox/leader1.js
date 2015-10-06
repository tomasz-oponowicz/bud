'use strict';

var quickSortAsc = require('./quickSortAsc');

function leader1(A) {
  var candidate, count, i;
  
  quickSortAsc(A);

  candidate = A[Math.floor(A.length / 2)];  
  for (i = 0, count = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      count += 1;
    }
  }
  
  return count > Math.floor(A.length / 2) ? candidate : -1; 
}

module.exports = leader1;
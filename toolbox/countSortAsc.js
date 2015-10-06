'use strict';

function countSortAsc(A, m) {
  var result = [], C = new Array(m + 1), i, j;
  
  for (i = 0; i < A.length; i++) {
    C[A[i]] = (C[A[i]] || 0) + 1;
  }
  
  for (i = 0; i <= C.length; i++) {
    for (j = 0; j < C[i]; j++) {
      result.push(i);
    }
  }
  
  return result;
}

module.exports = countSortAsc;
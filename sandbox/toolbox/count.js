'use strict';

function count(A, m) {
  var result = new Array(m + 1), i;
  
  for (i = 0; i < A.length; i++) {
    result[A[i]] = (result[A[i]] || 0) + 1;
  }
  
  return result;
}

module.exports = count;
'use strict';

function suffixes(A) {
  var N = A.length + 1, result = Array(N), i;
  
  result[A.length] = 0;
  for(i = A.length - 1; i >= 0; i--) {
    result[i] = result[i + 1] + A[i];
  }
  
  return result;
}

module.exports = suffixes;
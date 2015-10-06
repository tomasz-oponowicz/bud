'use strict';

function prefixes(A) {
  var result = [], i;
  
  for(i = 1, result[0] = 0; i <= A.length; i++) {
    result[i] = result[i - 1] + A[i - 1];
  }
  
  return result;
}

module.exports = prefixes;
'use strict';

// find specified sum
function caterpillarExample(A, s /* expected sum */) {
  var front, back, total;
  
  for (back = 0, front = 0, total = 0; back < A.length; back++) {
    while(front < A.length && total + A[front] <= s) {
      total += A[front];
      front += 1;
    }
    
    if (total === s) {
      
      // exists
      return true;
    }
    
    total -= A[back];
  }
  
  // doesn't exist
  return false;
}

module.exports = caterpillarExample;

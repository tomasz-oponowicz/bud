'use strict';

function leader2(A) {
  var stack = [], candidate, count, i;
  
  for (i = 0; i < A.length; i++) {
    stack.push(A[i]);
    
    if (stack.length >= 2 
        && stack[stack.length - 1] !== stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }  

  candidate = stack.pop();  
  for (i = 0, count = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      count += 1;
    }
  }
  
  return count > Math.floor(A.length / 2) ? candidate : -1; 
}

module.exports = leader2;
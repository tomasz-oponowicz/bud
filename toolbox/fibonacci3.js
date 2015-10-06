'use strict';

function fibonacci3(n) {
  console.assert(n >= 0, 'n >= 0');
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');

  var current, prev, prevprev, i;
  
  if (n <= 1) {
    return n;
  }

  for (i = 2, prevprev = 0, prev = 1; i <= n; i++) {
    current = prev + prevprev;
    
    prevprev = prev;
    prev = current;
  }
  
  return current;
}

module.exports = fibonacci3;
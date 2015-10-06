'use strict';

function fibonacci1(n) {
  console.assert(n >= 0, 'n >= 0');
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');
    
  if (n <= 1) {
    return n;
  }
  
  return fibonacci1(n - 1) + fibonacci1(n - 2); 
}

module.exports = fibonacci1;
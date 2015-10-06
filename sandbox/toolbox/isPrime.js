'use strict';

function isPrime(n) {
  console.assert(n > 1, 'n > 1');
  
  var i = 2;

  while(i * i <= n) {
    if (n % i === 0) {
      return false;
    }
    
    i += 1;
  }
  
  return true;
}

module.exports = isPrime;
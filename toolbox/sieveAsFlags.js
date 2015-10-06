'use strict';

function sieveAsFlags(n) {
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');
  console.assert(n >= 1, 'n >= 1');
  
  var sieve = Array(n + 1), i, j;
  
  sieve[0] = sieve[1] = false;
  for (i = 2; i < sieve.length; i++) {
    sieve[i] = true;
  }
  
  i = 2;
  while(i * i <= n) {    
    if (sieve[i]) {
      j = i * i;
      while (j <= n) {
        sieve[j] = false;
        j += i;
      }
    }
    
    i += 1;
  }
  
  return sieve;
}

module.exports = sieveAsFlags;
'use strict';

function sieveAsFactors(n) {
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');
  console.assert(n >= 1, 'n >= 1');
  
  var sieve = Array(n + 1), i, j;
  
  sieve[0] = sieve[1] = 0;
  for (i = 2; i < sieve.length; i++) {
    sieve[i] = 0;
  }
  
  i = 2;
  while(i * i <= n) {    
    if (sieve[i] == 0) {
      j = i * i;
      while (j <= n) {
        if (sieve[j] === 0) {
          sieve[j] = i;
        }
        j += i;
      }
    }
    
    i += 1;
  }
  
  return sieve;
}

module.exports = sieveAsFactors;
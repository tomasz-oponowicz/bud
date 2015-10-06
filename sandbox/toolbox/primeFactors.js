var sieveAsFactors = require('./sieveAsFactors');

function primeFactors(n) {
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');
  console.assert(n > 1, 'n > 1');
  
  var primes = [], sieve = sieveAsFactors(n);
  
  while(sieve[n] > 0) {
    primes.push(sieve[n]);
    n /= sieve[n];
  }
  
  primes.push(n);
  
  return primes;
}

module.exports = primeFactors;
'use strict';

function gcd2(a, b) {
  console.assert(a > 0, 'a > 0');
  console.assert(b > 0, 'b > 0');
  console.assert(Number.isInteger(a), 'Number.isInteger(a)');
  console.assert(Number.isInteger(b), 'Number.isInteger(b)');
  console.assert(a > b, 'a > b');
  
  if (a % b === 0) {
    return b;
  } else {
    return gcd2(b, a % b);
  }
}

module.exports = gcd2;
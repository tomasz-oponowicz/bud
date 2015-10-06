'use strict';

function gcd1(a, b) {
  console.assert(a > 0, 'a > 0');
  console.assert(b > 0, 'b > 0');
  console.assert(Number.isInteger(a), 'Number.isInteger(a)');
  console.assert(Number.isInteger(b), 'Number.isInteger(b)');
  
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd1(a - b, b);
  } else {
    return gcd1(a, b - a);
  }
}

module.exports = gcd1;
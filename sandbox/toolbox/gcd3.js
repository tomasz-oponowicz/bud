'use strict';

function gcd3(a, b, r) {
  console.assert(a > 0, 'a > 0');
  console.assert(b > 0, 'b > 0');
  console.assert(Number.isInteger(a), 'Number.isInteger(a)');
  console.assert(Number.isInteger(b), 'Number.isInteger(b)');
  
  if (a === b) {
    return r * a;
  } else if (a % 2 === 0 && b % 2 === 0) {
    return gcd3(Math.floor(a / 2), Math.floor(b / 2), 2 * r);
  } else if (a % 2 === 0) {
    return gcd3(Math.floor(a / 2), b, r);
  } else if (b % 2 === 0) {
    return gcd3(a, Math.floor(b / 2), r);
  } else if (a > b) {
    return gcd3(a - b, b, r);
  } else {
    return gcd3(a, b - a, r);
  } 
}

module.exports = gcd3;
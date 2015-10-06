'use strict';

function fibonacci2(n) {
  console.assert(n >= 0, 'n >= 0');
  console.assert(Number.isInteger(n), 'Number.isInteger(n)');

  var values = Array(n + 1), i;
  
  if (values.length >= 1) {
    values[0] = 0;
  }
  
  if (values.length >= 2) {
    values[1] = 1;
  }  
  
  for (i = 2; i <= n; i++) {
    values[i] = values[i - 1] + values[i - 2];
  }
  
  return values[n];
}

module.exports = fibonacci2;
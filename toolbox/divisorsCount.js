'use strict';

function divisorsCount(n) {
  var result = 0, i = 1;
  
  while (i * i < n) {
    if (n % i === 0) {
      result += 2;
    }
    
    i += 1;
  }
  
  if (i * i === n) {
    result += 1;
  }
  
  return result;
}

module.exports = divisorsCount;
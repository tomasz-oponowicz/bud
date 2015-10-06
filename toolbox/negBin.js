'use strict';

function negBin(x) {
  var B = [], r;

  while (x !== 0) {
    r = x % -2;
    x = Math.trunc(x / -2);

    if (r === 0) {
      r = 0;
    }
    
    if (r < 0) {
      r += 2;
      x += 1;
    }

    B.push(r);

  }

  return B;
}

module.exports = negBin;
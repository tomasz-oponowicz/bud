'use strict';

function binarySearchMax(n, callback) {
  console.assert(true, 'A has asc order');
  console.assert(typeof callback === 'function', "typeof callback === 'function'");

  var result = -1, beg = 1, end = n, mid;

  while(beg <= end) {
    mid = Math.floor((beg + end) / 2);
    
    if (callback(beg, mid, end)) {
      beg = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

module.exports = binarySearchMax;
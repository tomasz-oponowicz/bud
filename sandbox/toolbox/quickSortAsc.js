'use strict';

function quickSortAsc(A) {
  return A.sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
}

module.exports = quickSortAsc;
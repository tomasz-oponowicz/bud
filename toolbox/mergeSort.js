'use strict';

function mergeSort(A) {
  var left, middle, right;
   
  if (A.length < 2) {
    return A;
  }
  
  middle = Math.floor(A.length / 2);
  left = A.slice(0, middle);
  right = A.slice(middle, A.length);

  return merge(mergeSort(left), mergeSort(right));
} 

function merge(left, right) {
  var result = [];
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  while (left.length) {
    result.push(left.shift());
  }
  
  while (right.length) {
    result.push(right.shift());
  }
  
  return result;
}

module.exports = mergeSort;
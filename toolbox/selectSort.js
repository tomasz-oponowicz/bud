'use strict';

function selectSort(A) {
  var i, j, min, temp;
  
  for (i = 0; i < A.length; i++) {
    min = i;
    
    for (j = i; j < A.length; j++) {
      if (A[j] < A[min]) {
        min = j;
      }
    }
    
    temp = A[i];
    A[i] = A[min];
    A[min] = temp;
  }
  
  return A;
}

module.exports = selectSort;
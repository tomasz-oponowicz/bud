'use strict';

function knapsackUniqueExample(weights, values, capacity) {
  var A = [], quantity, i, j;
  
  // normalize
  values.unshift(null);
  weights.unshift(null);
  
  quantity = weights.length - 1;
  
  for (i = 0; i <= quantity; i++) {
    A[i] = [0];
  }
  
  for (j = 0; j <= capacity; j++) {
    A[0][j] = 0;
  }
  
  for (i = 1; i <= quantity; i++) {  
    for (j = 1; j <= capacity; j++) {
    
      if (weights[i] > j) {
        A[i][j] = A[i - 1][j]; 
      } else {
        A[i][j] = Math.max(A[i - 1][j], A[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  
  return A[quantity][capacity];
}

module.exports = knapsackUniqueExample;
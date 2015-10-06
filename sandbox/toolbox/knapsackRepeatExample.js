'use strict';

function knapsackRepeatExample(weights, values, capacity) {
  var partials = [], i, j;
  
  for (i = 0; i <= capacity; i++) {
    partials[i] = 0;
  }
  
  for (i = 1; i <= capacity; i++) {
    for (j = 0; j < weights.length; j++) {
      if (weights[j] <= i) {
        partials[i] = Math.max(partials[i], partials[i - weights[j]] + values[j]); 
      }
    }
  }
  
  return partials[capacity];
}

module.exports = knapsackRepeatExample;
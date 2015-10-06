function maxSlice(A) {
  var max = 0, sum, i;
  
  for (i = 0, sum = 0; i < A.length; i++) {
    sum = Math.max(0, sum + A[i]);
    max = Math.max(max, sum);
  }  
  
  return max;
}

module.exports = maxSlice;
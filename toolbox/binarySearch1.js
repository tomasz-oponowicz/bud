function binarySearch1(A, x) {
  console.assert(true, 'A has asc order');

  var beg = 0, end = A.length - 1, mid;

  while(beg < end) {
    mid = Math.floor((beg + end) / 2);

    if (A[mid] < x) {
      beg = mid + 1;
    } else {
      end = mid;
    }
  }

  if (A[beg] === x) {
    return beg;
  } else {
    return -1;
  }
}

module.exports = binarySearch1;

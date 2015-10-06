'use strict';

function negBinSub(A, B) {
  var C = [], len, carry, n, i;

  for (i = 0; i < B.length; i++) {
    if (B[i] === 1) {
      B[i] = -1;
    }
  }

  len = Math.max(A.length, B.length);

  carry = 0;
  i = 0;

  while(i < len || carry !== 0) {
    n = carry + (A[i] || 0) + (B[i] || 0);

    switch (n) {
      case -2:
        C.push(0);
        carry = 1;
        break;
      case -1:
        C.push(1);
        carry = 1;
        break;
      case 0:
        C.push(0);
        carry = 0;
        break;
      case 1:
        C.push(1);
        carry = 0;
        break;
      case 2:
        C.push(0);
        carry = -1;
        break;
      // case 3:
      //   C.push(1);
      //   carry = -1;
      //   break;
    };

    i += 1;
  }

  while (C[C.length - 1] === 0) {
    C.pop();
  }

  return C;
}

module.exports = negBinSub;
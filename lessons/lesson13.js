// lesson 13, example 1 (easy)
// input (6, [3,4,5,5,2]) output 9
function CountDistinctSlices(M, A) {
    var result = 0, front, back, C, MAX = Math.pow(10, 9);

    for (back = 0, front = 0, C = []; back < A.length; back++) {
        while(front < A.length && C[A[front]] !== 1) {
            C[A[front]] = 1;
            result += front - back + 1;
            front += 1;
        }

        C[A[back]] = undefined;
    }

    return Math.min(result, MAX);
}

// lesson 13, example 2 (easy)
// input [-5, -3, -1, 0, 3, 6], output 5
function AbsDistinct(A) {
    var result = 0, i, M = {}, a;

    for (i = 0; i < A.length; i++) {
        a = Math.abs(A[i]);
        if (M[a] !== 1) {
            result += 1;
        }

        M[a] = 1;
    }

    return result;
}

// lesson 13, example 3 (medium)
// input [1, 4, -3],  output 1
// input [-8, 4, 5, -10, 3], output 3
function MinAbsSumOfTwo(A) {
    function find(x) {
        var beg, end, left, right;

        beg = 0;
        end = A.length - 1;

        while (beg <= end) {
            left = Math.floor((beg + end) / 2);
            right = left === end ? left : left + 1;

            if (Math.abs(x + A[left]) <= Math.abs(x + A[right])) {
                end = left - 1;
            } else {
                beg = left + 1;
            }
        }

        return Math.abs(x + A[beg]);
    }

    var min = Infinity, i;

    A.sort(function(x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
    });

    for (i = 0; i < A.length; i++) {
        min = Math.min(min, find(A[i]));
    }

    return min;
}

// lesson 13, example 4 (medium)
// input [10,2,5,1,8,12], output 4
function CountTriangles(A) {
  var result = 0, x, y, z;

  A.sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });

  for (x = 0; x < A.length; x++) {
    z = 0;

    for (y = x + 1; y < A.length; y++) {
      while (z < A.length && A[x] + A[y] > A[z]) {
        z += 1;
      }

      result += z - y - 1;
    }
  }

  return result;
}

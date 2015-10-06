// lesson 4, example 1 (easy)
function MaxProductOfThree(A) {
    var left, right;

    A.sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });

    left = A[0] * A[1] * A[A.length - 1];
    right = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

    return Math.max(left, right);
}

// lesson 4, example 2 (easy)
// input: [2,1,1,2,3,1], expected: 3
function Distinct(A) {
    var i, last, count = 0;

    A.sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });

    for (i = 0, last = undefined; i < A.length; i++) {
        if (last !== A[i]) {
            last = A[i];
            count++;
        }
    }

    return count;
}

// lession 4, example 3 (easy)
// input: [10, 2, 5, 1, 8, 20], output: 1
// input : [10, 50, 5, 1], output: 0
function Triangle(A) {
    var i;

    A.sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });

    for (i = 2; i < A.length; i++) {
        if (A[i - 1] + A[i - 2] > A[i - 0] &&
                A[i - 2] + A[i - 0] > A[i - 1] &&
                A[i - 1] + A[i - 0] > A[i - 2]) {
            return 1
        }
    }

    return 0;
}

// lesson 4, example 4 (medium)
// input: [1, 5, 2, 1, 4, 0], output: 11
// http://www.lucainvernizzi.net/blog/2014/11/21/codility-beta-challenge-number-of-disc-intersections/
function NumberOfDiscIntersections(A) {
    var count = 0, i, B, current;

    for (i = 0, B = []; i < A.length; i++) {
        B.push([+1, i - A[i]]);
        B.push([-1, i + A[i]]);
    }

    B.sort(function(x, y) {
        return x[1] < y[1]
          ? -1
          : x[1] > y[1]
            ? 1
            : x[0] < y[0]
              ? 1
              : x[0] > y[0]
                ? -1
                : 0;
    });

    for (i = 0, current = 0; i < B.length; i++) {
        count += current * (B[i][0] > 0);
        current += B[i][0];

        if (count > Math.pow(10, 7)) {
            return -1;
        }
    }

    return count;
}

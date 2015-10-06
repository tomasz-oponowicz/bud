// lesson 2, example 2 (easy)
// input [4, 1, 3, 2], output 1
// input [4, 1, 3], output 0
// https://codility.com/demo/results/demoH4C7SD-JPN/
function PermCheck(A) {
    var n = A.length, count = Array(n + 1), i, j;

    for (i = 0; i < n; i++) {
        j = A[i];

        if (j > n) {
            return 0;
        }

        if (count[j] === undefined) {
            count[j] = 0;
        }

        count[j] += 1;
    }

    for (i = 1; i < n + 1; i++) {
        if (count[i] === undefined) {
            return 0;
        }
    }

    return 1;
}

// lesson 2, example 1 (easy)
// input [1, 3, 1, 4, 2, 3, 5, 4], output 6
// https://codility.com/demo/results/demo258VZ9-99Q/
function FrogRiverOne(X, A) {
    var i, flags = Array(X + 1), counter = 0;

    for (i = 0; i < A.length; i++) {
        if (flags[A[i]] === undefined) {
            flags[A[i]] = 1;
            counter++;
        }

        if (counter === X) {
            return i;
        }
    }

    return -1;
}

// lesson 2, example 3 (medium)
// input [1, 3, 6, 4, 1, 2], output 5
// https://codility.com/demo/results/demoPSGC3N-R4Y/
function MissingInteger(A) {
    var flags = [], i, n;

    for (i = 0; i < A.length; i++) {
        n = A[i];
        if (n >= 1) {
          flags[A[i]] = 1;
        }
    }

    for (i = 1; i < flags.length; i++) {
        n = flags[i];
        if (n === undefined) {
            return i;
        }
    }

    return i;
}

// lesson 2, example 4 (medium)
// input (5, [3, 4, 4, 6, 1, 4, 4]), output [3, 2, 2, 4, 2]
// https://codility.com/demo/results/demoQVJ4DB-M5C/
function MaxCounters(N, A) {
    var last = 0, max = 0, count = Array(N), i, x;

    for (i = 0; i < A.length; i++) {
        x = A[i] - 1;

        if (x === N) {
            last = max;
        } else {
            count[x] = Math.max(last, count[x] || last) + 1;
            max = Math.max(max, count[x]);
        }
    }

    for (i = 0; i < count.length; i++) {
        count[i] = Math.max(last, count[i] || last);
    }

    return count;
}

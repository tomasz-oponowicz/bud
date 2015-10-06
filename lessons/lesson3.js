// lesson 3, example 1 (easy)
// input [0, 1, 0, 1, 1], output 5
// https://codility.com/demo/results/demoKDCYGN-PU6/
function PassingCars() {
    var i, suffix = 0, sum = 0;

    for (i = A.length - 2; i >= 0; i--) {
        suffix = suffix + A[i + 1];

        if (A[i] === 0) {
            sum += suffix;
        }
    }

    return sum <= Math.pow(10, 9) ? sum : -1;
}

// lesson 3, example 2 (medium)
// input [4, 2, 2, 5, 1 5, 8], output 1
// https://codility.com/demo/results/demoV8RNBR-68P/
function MinAvgTwoSlice(A) {
    var start1 = 0, start2 = 0, minimum1 = Infinity, minimum2 = Infinity, average, i;
    
    for (i = 1; i < A.length; i++) {
        average = (A[i - 1] + A[i]) / 2;
        if (average < minimum1) {
            minimum1 = average;
            start1 = i - 1;
        }
    }
    
    for (i = 2; i < A.length; i++) {
        average = (A[i - 2] + A[i - 1] + A[i]) / 3;
        if (average < minimum2) {
            minimum2 = average;
            start2 = i - 2;
        }
    }
    
    if (minimum1 === minimum2) {
        return start1 < start2 ? start1 : start2;
    }    
    
    return minimum1 < minimum2 ? start1 : start2;
}

// lesson 3, example 3 (medium)
// input (6, 11, 2), output 3
// https://codility.com/demo/results/demoY4YHN5-YC8/
function CountDiv(A, B, K) {
    var beforeA = Math.floor(A/K);
    var beforeB = Math.floor(B/K);
    var count = beforeB - beforeA;
    if (A % K === 0) {
        count++;
    }
    return count;
}

// lesson 3, example 4 (medium)
// input ('CAGCCTA', [2, 5, 0], [4, 5, 6]), output [2, 4, 1]
// Comment: We create a subarray for every item. This is an overhead but Codility doesn't seem to care.
// https://codility.com/demo/results/demoWAZ4JB-SQB/
function GenomicRangeQuery(S, P, Q) {
    var C = Array(S.length + 1), i, c, p, q, min = [];

    for (i = 1, C[0] = [0, 0, 0, 0]; i < C.length; i++) {
        C[i] = [].concat(C[i - 1]);

        c = S[i - 1];
        if (c === 'A') {
            C[i][0]++;
        } else if (c === 'C') {
            C[i][1]++;
        } else if (c === 'G') {
            C[i][2]++;
        } else if (c === 'T') {
            C[i][3]++;
        }
    }

    for (i = 0; i < P.length; i++) {
        p = P[i];
        q = Q[i] + 1;

        if (C[q][0] - C[p][0] > 0) {
            min.push(1);
        } else if (C[q][1] - C[p][1] > 0) {
            min.push(2);
        } else if (C[q][2] - C[p][2] > 0) {
            min.push(3);
        } else if (C[q][3] - C[p][3] > 0) {
            min.push(4);
        }
    }

    return min;
}

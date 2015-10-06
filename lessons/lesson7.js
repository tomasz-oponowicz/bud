
// lesson 7, example 1 (easy)
// input: [23171, 21011, 21123, 21366, 21013, 21367], output: 356
function MaxProfit(A) {
    var maxProfit = 0, i, maxEnding, previous, current;

    for (i = 0, previous = A[0], maxEnding = 0; i < A.length; i++) {
        current = A[i] - previous;
        maxEnding = Math.max(0, maxEnding + current);
        maxProfit = Math.max(maxProfit, maxEnding);
        previous = A[i];
    }

    return maxProfit < 0 ? 0 : maxProfit;
}

// lesson 7, example 2 (easy)
// input: [3, 2, -6, 4, 0], output: 5
function MaxSliceSum(A) {
    var maxSlice = A[0], i, maxEnding;

    for (i = 0, maxEnding = 0; i < A.length; i++) {
        maxEnding += A[i];
        maxSlice = Math.max(maxSlice, maxEnding);
        if (maxEnding < 0) {
            maxEnding = 0;
        }
    }

    return maxSlice;
}

// lesson 7, example 3 (medium)
// input [3, 2, 6, -1, 4, 5, -1, 2], output 17
function MaxDoubleSliceSum(A) {
    var max = 0, i, N = A.length, K1 = [], K2 = [];

    K1[0] = 0;
    for (i = 1; i < N - 1; i++) {
        K1[i] = Math.max(K1[i - 1] + A[i], 0);
    }

    K2[N - 1] = 0;
    for (i = N - 2; i > 0; i--) {
        K2[i] = Math.max(A[i] + K2[i + 1], 0);
    }

    for (i = 1; i < N - 1; i++) {
        max = Math.max(max, K1[i - 1] + K2[i + 1]);
    }

    return max;
}

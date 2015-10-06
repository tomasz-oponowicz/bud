// TODO lesson 15, example 2 (hard) - MinAbsSum

// lesson 15, example 1 (medium)
// input [1, -2, 0, 9, -1, -2], output 8
function NumberSolitaire(A) {
    var S = [], i, k;

    S[0] = A[0];

    for (i = 1; i < A.length; i++) {
        for (k = 1; k <= 6; k++) {
            if (k <= i) {
                S[i] = Math.max(A[i] + S[i - k], S[i] || -Infinity);
            }
        }
    }

    return S[S.length - 1];
}


// lesson 11, example 1 (medium)
// input ([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]), output [5, 1, 8, 0, 1]
function Ladder(A, B) {
    var L = [], F = [], i, MAX;

    F[0] = 0;
    F[1] = 1;

    for (i = 2, MAX = Math.pow(2, 30); i <= A.length + 1; i++) {
        F[i] = (F[i - 1] + F[i - 2]) % MAX;
    }

    for (i = 0; i < A.length; i++) {
        L.push(F[A[i] + 1] % Math.pow(2, B[i]));
    }

    return L;
}

// lesson 11, example 2 (hard)
// input [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0], output 3
function FibFrog(A) {
    var J = [], i, last, j, S = Array(A.length + 2), result;

    J[0] = 0;
    last = J[1] = 1;

    i = 2;
    while (last <= A.length + 1) {
        last = J[i] = J[i - 1] + J[i - 2];
        i++;
    }

    J.shift();

    S[0] = 1;

    A.unshift(1);
    A.push(1);

    for (i = 0; i < A.length; i++) {
        for (j = 0; j < J.length; j++) {
            if (J[j] <= i) {
                if (A[i] === 1 && A[i - J[j]] === 1 && S[i - J[j]] !== undefined) {
                    if (S[i] === undefined) {
                        S[i] = S[i - J[j]] + 1;
                    } else {
                        S[i] = Math.min(S[i], S[i - J[j]] + 1);
                    }
                }
            }
        }
    }

    result = S[S.length - 1];
    return result === undefined ? -1 : result - 1;
}

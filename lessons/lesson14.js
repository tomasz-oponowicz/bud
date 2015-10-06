// lesson 14, example 1 (easy)
// input ([1,3,7,9,9], [5,6,8,9,10]), output 3
function MaxNonoverlappingSegments(A, B) {
    var result = 0, i, j;

    if (A.length === 0) {
        return 0;
    }

    for (i = 0, j = 1, result = 1; j < A.length; j++) {
        if ((A[i] <= A[j] && A[j] <= B[i]) || (A[j] <= A[i] && A[i] <= B[j])) {
            // nope
        } else {
            i = j;
            result += 1;
        }
    }

    return result;
}

// lesson 14, example 2 (easy)
// input (4, [1, 2, 3, 4, 1, 1, 3]), output 3
function TieRopes(K, A) {
    var result = 0, i, sum;

    for (i = 0, sum = 0; i < A.length; i++) {
        if (sum + A[i] >= K) {
            sum = 0;
            result += 1;
        } else {
            sum += A[i];
        }
    }

    return result;
}

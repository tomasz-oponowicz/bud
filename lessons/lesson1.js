// lesson 1, example 1 (easy)
// input [3, 1, 2, 4, 3], output 1
// https://codility.com/demo/results/demo46RYJF-GVZ/
function TapeEquilibrium(A) {
    var left = A[0];
    var right = 0;
    for (var i = 1; i < A.length; i++) {
        right += A[i];
    }

    var min = Math.abs(left - right);
    for (var j = 2; j < A.length; j++) {
        left += A[j - 1];
        right -= A[j - 1];
        min = Math.min(min, Math.abs(left - right));
    }

    return min;
}

// lesson 1, example 2 (easy)
// input [2, 3, 1, 5], output 4
// https://codility.com/demo/results/demoHQBXXM-FRS/
function PermMissingElem(A) {
    var n = A.length;
    var total = ((n + 1) * (n + 2)) / 2;

    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        sum += A[i];
    }

    return total - sum;
}

// lesson 1, example 3 (easy)
// input (10, 85, 30), output 3
// https://codility.com/demo/results/demoT5NDMD-KRD/
function FrogJmp(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

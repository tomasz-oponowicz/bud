// lesson 6, example 1 (easy)
// input [4,3,4,4,4,2], output: 2
function EquiLeader(A) {
    var i, value, size, candidate, count, leader, total, result, left, right;

    for (i = 0, size = 0; i < A.length; i++) {
        if (size === 0) {
            size++;
            value = A[i];
        } else {
            if (value != A[i]) {
                size--;
            } else {
                size++;
            }
        }
    }

    if (size > 0) {
        candidate = value;
    } else {
        return 0;
    }

    for (i = 0, count = 0; i < A.length; i++) {
        if (candidate === A[i]) {
            count++;
        }
    }

    if (count > (A.length / 2)) {
        leader = candidate;
        total = count;
    } else {
        return 0;
    }

    for (i = 0, count = 0, result = 0; i < A.length; i++) {
        if (leader === A[i]) {
            count++;
        }

        left = count > ((i + 1) / 2);
        right = (total - count) > ((A.length - (i + 1)) / 2);

        if (left && right) {
            result++;
        }
    }

    return result;
}

// lesson 6, example 2 (easy)
// input: [3, 4, 3, 2, 3, -1, 3, 3], output: 0, 2, 4, 6 or 7
function Dominator(A) {
    var i, value, size, candidate, last;

    for (i = 0, size = 0; i < A.length; i++) {
        if (size === 0) {
            size++;
            value = A[i];
        } else {
            if (value === A[i]) {
                size++;
            } else {
                size--;
            }
        }
    }

    if (size > 0) {
        candidate = value;
    } else {
        return -1;
    }

    for (i = 0, count = 0; i < A.length; i++) {
        if (candidate === A[i]) {
            count++;
            last = i;
        }
    }

    return (count > (A.length / 2)) ? last : -1;
}

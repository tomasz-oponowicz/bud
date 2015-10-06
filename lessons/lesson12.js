// lesson 12, example 1 (medium)
// input (3,5,[2, 1, 5, 1, 2, 2, 2]), output 6
function MinMaxDivision(K, M, A) {
    function blocks(max) {
        var i, sum, count;

        for (i = 0, sum = 0, count = 1; i < A.length; i++) {
            if (sum + A[i] > max) {
                sum = A[i];
                count += 1;
            } else {
                sum += A[i];
            }
        }

        return count;
    }

    var result, i, max, sum, beg, end, mid;

    for (i = 0, max = 0; i < A.length; i++) {
        max = Math.max(max, A[i]);
    }

    for (i = 0, sum = 0; i < A.length; i++) {
        sum += A[i];
    }

    if (K === 1) {
        return sum;
    }

    if (K >= A.length) {
        return max;
    }

    beg = max;
    end = sum;

    while (beg <= end) {
        mid = Math.floor((beg + end) / 2);
        if (blocks(mid) <= K) {
            end = mid - 1;
            result = mid;
        } else {
            beg = mid + 1;
        }
    }

    return result;
}

// lesson 12, example 2 (hard)
// input ([1,4,5,8], [4,5,9,10], [4,6,7,10,2]), output 4
function NailingPlanks(A, B, C) {
    function check(j) {
        var g, h, flags, prefixes, count, a, b;

        for (g = 0, flags = []; g < j; g++) {
            flags[C[g]] = 1;
        }

        for (g = 0, count = 0, prefixes = []; g <= flags.length; g++) {
            if (flags[g - 1] === 1) {
                count += 1;
            }

            prefixes[g] = count;
        }

        for (g = 0; g < A.length; g++) {
            a = A[g] >= prefixes.length
                ? prefixes[prefixes.length - 1] : prefixes[A[g]];
            b = B[g] + 1 >= prefixes.length
                ? prefixes[prefixes.length - 1] : prefixes[B[g] + 1];
            count = a - b;

            if (isNaN(count) || count === 0) {
                return false;
            }
        }

        return true;
    }

    var beg, end, mid, result;

    beg = 1;
    end = C.length;
    result = -1;

    while(beg <= end) {
        mid = Math.floor((beg + end) / 2);

        if (check(mid)) {
            end = mid - 1;
            result = mid;
        } else {
            beg = mid + 1;
        }
    }

    return result;
}

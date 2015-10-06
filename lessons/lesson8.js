// TODO lesson 8, example 2 (hard) - Flags

// lesson 8, example 1 (easy)
// input 30, output 22
function MinPerimeterRectangle(N) {
    var min = Infinity, i, a, b;

    i = 1;
    while(i * i < N) {
        if (N % i === 0) {
            a = i;
            b = N / i;
            min = Math.min(min, 2 * (a + b));
        }

        i++;
    }

    if (i * i === N) {
        a = b = i;
        min = Math.min(min, 2 * (a + b));
    }

    return min;
}

// lesson 8, example 2 (easy)
// input 24, output 8
function CountFactors(N) {
    var count = 0, i;

    i = 1;
    while(i * i < N) {
        if (N % i === 0) {
            count += 2;
        }

        i++;
    }

    if (i * i === N) {
        count += 1;
    }

    return count;
}


// lesson 8, example 3 (medium)
// input [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2], output 3
function Peaks(A) {
    var i, N = A.length, P = [], expected, actual, n, found;

    for (i = 1; i < N - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            P.push(i);
        }
    }

    for (n = 1; n <= N; n++) {
        if (N % n !== 0) {
            continue;
        }

        found = true;

        actual = 0;
        expected = N / n;

        for (i = 0; i < P.length; i++) {
            if (Math.floor(P[i] / n) > actual) {
                found = false;
                break;
            }

            if (Math.floor(P[i] / n) === actual) {
                actual++;
            }
        }

        if (actual !== expected) {
            found = false;
        }

        if (found) {
            return expected;
        }
    }

    return 0;
}

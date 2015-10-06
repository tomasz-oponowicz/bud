// lesson 9, example 1 (easy)
// input (26, [1,4,16], [26,10,20]), output [10, 4, 0]
function CountSemiprimes(N, P, Q) {
    var i, primes = Array(N + 1), n, semiprimes = Array(N + 1), prefixes = Array(N + 2), jumps, results;

    i = 2;
    while (i <= N) {
        if (primes[i] === undefined) {
            n = i;
            while (n <= N) {
                if (primes[n] === undefined) {
                    primes[n] = i;
                }

                n += i;
            }
        }

        i += 1;
    }

    for (i = 2; i <= N; i++) {
        jumps = 0;

        n = i;
        while (primes[n] !== undefined) {
            jumps += 1;
            n /= primes[n];

            if (jumps > 2) {
                break;
            }
        }

        if (jumps === 2) {
            semiprimes[i] = 1;
        }
    }

    prefixes[1] = 0;
    for (i = 2; i <= N + 1; i++) {
        prefixes[i] = prefixes[i - 1] + (semiprimes[i - 1] || 0);
    }

    results = [];
    for (i = 0; i < P.length; i++) {
        results[i] = prefixes[Q[i] + 1] - prefixes[P[i]];
    }

    return results;
}

// lesson 9, example 2 (medium)
// input [3, 1, 2, 3, 6], output [2, 4, 3, 2, 0]
function CountNonDivisible(A) {
    var i, C = [], j, D, count, total, results = [];

    function asc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

    for (i = 0, total = 0; i < A.length; i++) {
        if (C[A[i]] === undefined) {
            C[A[i]] = 1;
        } else {
            C[A[i]] += 1;
        }

        total++;
    }

    for (i = 0; i < A.length; i++) {
        D = [];

        j = 1;
        while(j * j < A[i]) {
            if (A[i] % j === 0) {
                D.push(j);
                D.push(A[i] / j);
            }

            j += 1;
        }

        if (j * j === A[i]) {
            D.push(j);
        }

        for (j = 0, count = 0, D.sort(asc); j < D.length; j++) {
            if (j === 0 || D[j - 1] !== D[j]) {
                count += C[D[j]] || 0;
            }
        }

        results.push(total - count);
    }

    return results;
}

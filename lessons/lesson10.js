// lesson 10, example 1 (easy)
// input (10, 4), output 5
function ChocolatesByNumbers(N, M) {
    var count = 0, i, eaten = {}, l, c;

    i = 0;
    while (eaten[i] === undefined) {
        eaten[i] = true;

        l = N - i;

        if (l % M === 0) {
            c = Math.floor(l / M);
            i = 0;
        } else {
            c = Math.floor(l / M) + 1;
            i = (i + (c * M)) % N;
        }

        count += c;
    }

    return count;
}

// lesson 10, example 2 (medium)
// input ([15, 10, 3], [75, 30, 5]), output 1
// https://codility.com/demo/results/demoAGJ2GJ-P4H/
function CommonPrimeDivisors(A, B) {
    function gcd(a, b) {
        var c;
        if (a < b) {
            c = a;
            a = b;
            b = c;
        }
        
        if (a % b === 0) {
            return b;
        } else {
            return gcd(b, a % b);
        }
    }
    
    function subset(x, D) {
        var d;
        
        x = Math.floor(x / D);
        
        while(1) {
            d = gcd(x, D);
            
            if (d === x) {
                return true;
            }
            if (d === 1) {
                return false;
            }
            
            x = Math.floor(x / d);
        }
    }
    
    var result = 0, i, a, b, d;
    
    for (i = 0; i < A.length; i++) {
        a = A[i];
        b = B[i];
        
        d = gcd(a, b);
        
        if (subset(a, d) && subset(b, d)) {
            result += 1;
        }
    }
    
    return result;
}
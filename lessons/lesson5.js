// 2 ranges intersection:
// x1 < y1 && x2 < y2
/*
var x = Math.max(x1, x2);
var y = Math.min(y1, y2);
if (y - x > 0) {
  // there is intersection
} else {
  // there isn't intersection
}
*/

// lesson 5, example 1 (easy)
// input '{[()()]}', output: 1
// input '([)()]', output: 0
function Brackets(S) {
    var i, stack = [], s1, s2;

    for (i = 0; i < S.length; i++) {
        s1 = S[i];

        if (s1 === '(' || s1 === '[' || s1 === '{') {
            stack.push(s1);
        } else {
            s2 = stack.pop();

            if ((s1 === ')' && s2 !== '(') ||
                (s1 === ']' && s2 !== '[') ||
                (s1 === '}' && s2 !== '{')) {
                return 0;
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}

// lesson 5, example 2 (easy)
// input '(()(())())', output: 1
// input '())', output: 0
function Nesting(S) {
    var counter = 0, i, s;

    for (i = 0; i < S.length; i++) {
        s = S[i];

        if (s === '(') {
            counter++;
        } else {
            counter--;
        }

        if (counter < 0) {
            return 0;
        }
    }

    return counter === 0 ? 1 : 0;
}

// lesson 5, example 3 (easy)
// input '[4, 3, 2, 1, 5], [0, 1, 0, 0, 0]', output: 2
function Fish(A, B) {
    var stack = [], i, x, y;

    for (i = 0; i < B.length; i++) {
        stack.push(i);

        while(B[stack[stack.length - 2]] === 1 && B[stack[stack.length - 1]] === 0) {
            x = stack.pop();
            y = stack.pop();

            if (A[x] < A[y]) {
                stack.push(y);
            } else {
                stack.push(x);
            }
        }
    }

    return stack.length;
}

// lesson 5, example 4 (easy)
// input '[8, 8, 5, 7, 9, 8, 7, 4, 8]', output: 7
function StoneWall(H) {
    var count = 0, i, stack = [], x, y;
    for (i = 0; i < H.length; i++) {
        stack.push(H[i]);

        while(stack.length >= 2 &&
                (stack[stack.length - 1] <= stack[stack.length - 2])) {
            x = stack.pop();
            y = stack.pop();

            if (x < y) {
                count++;
                stack.push(x);
            }

            if (x > y) {
                stack.push(y);
                stack.push(x);
            }

            if (x === y) {
                stack.push(y);
            }
        }
    }

    return count + stack.length;
}

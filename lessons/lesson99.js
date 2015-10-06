//TODO lesson 99, example 6 (hard) - PolygonConcavityIndex

// lesson 99, example 1 (easy)
// input [9, 3, 9, 3, 9, 7, 9], output 7
// https://codility.com/demo/results/demoTHYZJ9-95Z/
function OddOccurrencesInArray(A) {
    var count, i;

    A.sort(function(x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
    });
    
    for (i = 1, count = 1; i < A.length; i++) {
        if (A[i - 1] === A[i]) {
            count += 1;
        } else {
            if (count % 2 === 1) {
                return A[i - 1];
            } else {
                count = 1;
            }
        }
    }
    
    return A[A.length - 1];
}

// lesson 99, example 2 (easy)
// input "racecar", output 3
// input "x", output 0
// https://codility.com/demo/results/demoPVY5P5-A7P/
function StrSymmetryPoint(S) {
    var i, j;
    
    if (S.length === 0 || S.length % 2 === 0) {
        return -1;
    }
    
    if (S.length === 1) {
        return 0;
    }

    i = 0;
    j = S.length - 1;
    
    while (i !== j) {
        if (S[i] !== S[j]) {
            return -1;
        }
        
        i += 1;
        j -= 1;
    }
    
    return i;
}

// lesson 99, example 3 (easy)
// input:
//  {
//    x: 5,
//    l: {
//      x: 3,
//      l: {
//        x: 20
//      },
//      r: {
//        x: 21
//      }
//    },
//    r: {
//      x: 10,
//      l: {
//        x: 1
//      }
//    }
//    
//  }
// output 3
// https://codility.com/demo/results/demoQ37FCG-77Q/
function TreeHeight(T) {
    function traverse(node) {
        if (node === null) {
            return 0;
        }
        
        return Math.max(traverse(node.l), traverse(node.r)) + 1;
    }
    
    return traverse(T) - 1;
}

// lesson 99, example 4 (easy)
// input 1041, output 5
// https://codility.com/demo/results/demoNGJHV8-XX9/
function BinaryGap(N) {
    var result = 0, b = N.toString(2), i, previous;
    
    for (previous = 0, i = 1; i < b.length; i++) {
        if (b[i] === '1') {
            result = Math.max(result, i - previous - 1);
            previous = i;
        }
    }
    
    return result;
}

// lesson 99, example 5 (medium)
// input [-1, 6, 3, 4, 7, 4], output 4
// https://codility.com/demo/results/demoNJXVVC-GAQ/
function ArrayInversionCount(A) {
    var count = 0;
    
    // Merge sort algorithm from:
    // http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
    
    function mergeSort(arr) {
        if (arr.length < 2)
            return arr;
     
        var middle = parseInt(arr.length / 2);
        var left   = arr.slice(0, middle);
        var right  = arr.slice(middle, arr.length);
     
        return merge(mergeSort(left), mergeSort(right));
    }
     
    function merge(left, right) {
        var result = [];
     
        while (left.length && right.length) {
            if (left[0] > right[0]) {
                count += right.length;
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
     
        while (left.length)
            result.push(left.shift());
     
        while (right.length)
            result.push(right.shift());
     
        return result;
    }
    
    mergeSort(A);

    return count < 10e8 ? count : -1; 
}
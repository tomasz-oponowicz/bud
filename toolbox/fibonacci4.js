'use strict';

function fibonacci4(n) {
  var a = Math.pow((1 + Math.sqrt(5)) / 2, n),
      b = Math.pow((1 - Math.sqrt(5)) / 2, n);
  
  return (a - b) / Math.sqrt(5);
}

module.exports = fibonacci4;
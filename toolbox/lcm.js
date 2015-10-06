'use strict';

var gcd2 = require('./gcd2.js');

function lcm(a, b) {
  return Math.floor((a * b) / gcd2(a, b));
}

module.exports = lcm;
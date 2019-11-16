const Benchmark = require('benchmark');

const asseblyScriptIsPrime = require('./index').isPrime;

function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false
    }
  }

  return true;
}

const suite = new Benchmark.Suite;
const startNumber = 2;
const stopNumber = 10000;
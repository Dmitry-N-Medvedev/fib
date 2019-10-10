/* eslint-env node */

const {
  describe,
  it,
} = require('mocha');
const {
  expect,
} = require('chai');
const {
  fib,
} = require('../index');

describe('Fibonacci Sequence', () => {
  const EXPECTED_SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  const UNSAFE_INTEGER = 2 ** 53;

  it('should calculate zero-based Nth value', () => {
    expect(fib(0)).to.equal(0);
    expect(fib(1)).to.equal(1);
    expect(
      fib(EXPECTED_SEQUENCE.length - 1),
    ).to.equal(EXPECTED_SEQUENCE[EXPECTED_SEQUENCE.length - 1]);

    expect(fib(-1)).to.equal(null);
    expect(fib(null)).to.equal(null);
    expect(fib(undefined)).to.equal(null);
    expect(fib({})).to.equal(null);
    expect(fib(UNSAFE_INTEGER)).to.equal(null);
    expect(fib(-UNSAFE_INTEGER)).to.equal(null);
  });
});

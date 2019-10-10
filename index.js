const baseSequence = [0, 1];

Object.freeze(baseSequence);

const is_input_valid = (input) => (
  input !== null
    || typeof nth !== 'undefined'
    || input >= 0
    || Number.isSafeInteger(input) === true
);

module.exports.INVALID = null;

module.exports.fib = (nth) => {
  if (is_input_valid(nth) === true) {
    return this.INVALID;
  }

  if (nth < baseSequence.length) {
    return baseSequence[nth];
  }

  const memo = (new Array(nth + 1)).fill(0);

  memo.unshift(...baseSequence);
  memo.length -= baseSequence.length;

  for (let i = baseSequence.length; i < memo.length; i += 1) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }

  return memo[nth];
};

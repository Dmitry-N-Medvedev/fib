const baseSequence = [0, 1];

Object.freeze(baseSequence);

module.exports.fib = (nth) => {
  if (
    nth === null
    || typeof nth === 'undefined'
    || nth < 0
    || Number.isSafeInteger(nth) === false
  ) {
    return null;
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

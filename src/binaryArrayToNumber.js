function binaryArrayToNumber(arrWithDigits) {
  let result = 0;
  for (let i = 1; i <= arrWithDigits.length; i++) {
    if (arrWithDigits[arrWithDigits.length - i] === 1) {
      if (i === 1) {
        result += 1;
      } else {
        result += Math.pow(2, i - 1);
      }
    }
  }
  return result;
}

module.exports = binaryArrayToNumber;

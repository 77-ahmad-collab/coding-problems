const numberIsZeroOrOne = (currentNumber) => {
  if (currentNumber === 1 || currentNumber === 0) return true;
  else return false;
};

const convertDecimalTo32BitBinary = (n) => {
  let remainder = 0;
  let currentNumber = n;
  const integerBits = 32;
  let isBreak = false;
  let binaryNumber = "";

  while (!isBreak) {
    const quotient = Math.floor(currentNumber / 2);
    remainder = currentNumber - quotient * 2;
    binaryNumber = remainder + binaryNumber;
    if (quotient === 1) {
      binaryNumber = "1" + binaryNumber;
      isBreak = true;
    }
    currentNumber = quotient;
  }

  binaryNumber = "0".repeat(integerBits - binaryNumber.length) + binaryNumber;

  return binaryNumber;
};

const flipBits = (n) => {
  if (numberIsZeroOrOne(n)) {
    return n.toString();
  } else return convertDecimalTo32BitBinary(n);
};

const binary = flipBits(3);
console.log("🚀 ~ file: flippingbits.ts:38 ~ binary:", binary);

const numberIsZeroOrOne = (currentNumber) => {
  if (currentNumber === 1 || currentNumber === 0) return true;
  else return false;
};

const convertDecimalToBinary = (n) => {
  let [remainder,currentNumber,isBreak,binaryNumber]=[0,n,false,""]

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

  return binaryNumber;
};

const convertInToBinary = (n) => {
  let binary = "";
  const integerBits = 32;
  if (numberIsZeroOrOne(n)) {
    binary = n.toString();
  } else binary = convertDecimalToBinary(n);
  binary = "0".repeat(integerBits - binary.length) + binary;

  return binary;
};

const flipBinary = (binary) => {
  let flipBits = "";

  for (i = 0; i < binary.length; i++) {
    if (binary[i] === "0") flipBits += "1";
    else flipBits += "0";
  }

  return flipBits;
};

const convertBinaryToDecimal = (binary) => {
  const digit = parseInt(binary, 2);
  return digit;
};

const flipBits = (n) => {
  const binary = convertInToBinary(n);
  const flippedBinary = flipBinary(binary);
  const flippedBinaryInDecimal = convertBinaryToDecimal(flippedBinary);
  console.log("🚀 ~ file: flippingbits.js:54 ~ flipBits ~ flippedBinaryInDecimal:", flippedBinaryInDecimal)
};

const binary = flipBits(0);
// console.log("🚀 ~ file: flippingbits.ts:38 ~ binary:", binary);

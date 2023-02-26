function camelCase(str) {
  let [newString, splittedString, operation] = ["", "", ""];

  const regEx = /\W+|(?=[A-Z])|_/g;

  newString = str.slice(4).trim();
  operation = str[2];
  if (str[0] === "S") {
    // for splitting the string
    splittedString = newString.split(regEx).join(" ").toLowerCase();
  } else {

    // for combining the string
    splittedString = "";
    newString.split(" ").forEach((word, index) => {
      if (index !== 0) {
        word = word[0].toUpperCase() + word.slice(1);
      }

      splittedString += word;
    });
    if (operation === "M") {
      splittedString += "()";
    } else if (operation === "C") {
      splittedString =
        splittedString[0].toUpperCase() + splittedString.slice(1);
    }
  }

  return splittedString.trim();
}

console.log(camelCase("C;V;mobile phone"));
console.log(camelCase("S;M;plasticCup()"));
console.log(camelCase("C;C;coffee machine"));
console.log(camelCase("S;C;LargeSoftwareBook"));
console.log(camelCase("C;M;white sheet of paper"));
console.log(camelCase("S;V;pictureFrame"));

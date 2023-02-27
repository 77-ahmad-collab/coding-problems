// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase 
// letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern,
// except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

function camelCase(input) {
   let inputs = input.split("\n");
  let [newString, splittedString, operation,result] = ["", "", "",[]];

  const regEx = /\W+|(?=[A-Z])|_/g;

  inputs.forEach((str)=>{
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

  result.push(splittedString.trim())
  })
 

  return result
}

console.log(camelCase("C;V;mobile phone"));
console.log(camelCase("S;M;plasticCup()"));
console.log(camelCase("C;C;coffee machine"));
console.log(camelCase("S;C;LargeSoftwareBook"));
console.log(camelCase("C;M;white sheet of paper"));
console.log(camelCase("S;V;pictureFrame").join("\n"));

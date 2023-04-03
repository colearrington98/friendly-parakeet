// Assignment code here
function getRandomLower() { // a-z
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // 97 is the char code for a
} // Math.floor rounds down to the nearest whole number

function getRandomUpper() { // A-Z
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // 65 is the char code for A
} // Math.floor rounds down to the nearest whole number

function getRandomNumber() { // 0-9
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 48 is the char code for 0
} // Math.random() returns a random number between 0 and 1

function getRandomSymbol() { // !@#$%^&*(){}[]=<>/,.
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = { // Object containing the functions
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // Get the generate button element

// Write password to the #password input
function writePassword() { // Function to write password
  var length = prompt("How many characters would you like your password to be? (Please enter a number between 8 and 128)"); // Prompt user for length
  while (isNaN(length) || length < 8 || length > 128) { // Validate input
    length = prompt("Invalid input. Please enter a number between 8 and 128.");
  }
  var includeLower = confirm("Do you want to include lowercase characters?");
  var includeUpper = confirm("Do you want to include uppercase characters?");
  var includeNumber = confirm("Do you want to include numeric characters?");
  var includeSymbol = confirm("Do you want to include special characters?");
  while (!includeLower && !includeUpper && !includeNumber && !includeSymbol) { // Validate input
    alert("Please select at least one type of character to include in your password.");
    includeLower = confirm("Do you want to include lowercase characters?");
    includeUpper = confirm("Do you want to include uppercase characters?");
    includeNumber = confirm("Do you want to include numeric characters?");
    includeSymbol = confirm("Do you want to include special characters?");
  }
  var password = generatePassword(length, includeLower, includeUpper, includeNumber, includeSymbol); // Get the password
  var passwordText = document.querySelector("#password"); // Get the password text element
  passwordText.value = password; // Set the password text
} // End function writePassword

function generatePassword(length, includeLower, includeUpper, includeNumber, includeSymbol) { //  Function to generate password
  let password = ""; //  Set password to empty string
  let possibleCharacters = ""; //  Set possible characters to empty string
  if (includeLower) { // If including lowercase characters, add them to possible characters
    possibleCharacters += getRandomLower();
  }
  if (includeUpper) { // If including uppercase characters, add them to possible characters
    possibleCharacters += getRandomUpper();
  }
  if (includeNumber) { // If including numeric characters, add them to possible characters
    possibleCharacters += getRandomNumber
  }
  if (includeSymbol) { // If including special characters, add them to possible characters
    possibleCharacters += getRandomSymbol();
  }
  for (let i = 0; i < length; i++) { // Loop through the length of the password
    password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; // Add a random character to the password
  }
  return password; // Return the password
} // End function generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Add event listener to the generate button



// Assignment code here

// Prompts user to input criteria
var promptCriteria = function() {
  window.alert("Please set the criteria for your password.");
}

// Asks for password length
var getLength = function() {
  var length = prompt("What is the desired length of your passowrd?  Select a value between 8 and 128.")
  if (length >+ 8 && length <= 128) {
    alert ("You have selected " + length + " characters as your password length.");
  }
  else {
    alert("You need to choose a valid option.  Try again.")
    getLength();
  }
  
  console.log("The length of your password is " + length);
  length = parseInt(length);
  
}

// Confirms whether user would like to include numerical values
var checkNumeric = function() {
  var numeric = prompt("Would you like to include numerical values in your password? Type 'Y' for YES and 'N' for NO.");
  if (numeric === "y" || numeric === "Y") {
    window.alert("You have selected YES to numerical values.");
}
  else if (numeric === "n" || numeric === "N") {
    window.alert("You have selected NO to numerical values.");
  }
    else {
      window.alert("You need to choose a valid option. Try again.");
      checkNumeric();
    }

  }

  // Confirms whether user would like to use lowercase letters
var checkLowercase = function() {
  var lowerCase = prompt("Would you like to include lowercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  if (lowerCase === "y" || lowerCase === "Y") {
    window.alert("You have selected YES to lowercase letters.");
}
  else if (lowerCase === "n" || lowerCase === "N") {
    window.alert("You have selected NO to lowercase letters.");
  }
    else {
      window.alert("You need to choose a valid option. Try again.");
      checkLowercase();
    }

  console.log("You have selected " + lowerCase + " to lowercase letters.")
  
  
}

// Confirms whether user would like to use uppercase letters
var checkUppercase = function() {
  var upperCase = prompt("Would you like to include uppercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  if (upperCase === "y" || upperCase === "Y") {
    window.alert("You have selected YES to uppercase letters.");
}
  else if (upperCase === "n" || upperCase === "N") {
    window.alert("You have selected NO to uppercase letters.");
  }
    else {
      window.alert("You need to choose a valid option. Try again.");
      checkUppercase();
    }
  console.log("You have selected " + upperCase + " to uppercase letters.")
}

// Confirms whether user would like to use special characters
var checkSpecialChar = function() {
  var specialChar = prompt("Would you like to include special characters such as '!' or '?' in your password? Type 'Y' for YES and 'N' for NO.");
  if (specialChar === "y" || specialChar === "Y") {
    window.alert("You have selected YES to special characters.");
}
  else if (specialChar === "n" || specialChar === "N") {
    window.alert("You have selected NO to special characters.");
  }
    else {
      window.alert("You need to choose a valid option. Try again.");
      checkSpecialChar();
    }
  console.log("You have selected " + specialChar + " to specialCharacters.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptCriteria();
  getLength();
  checkNumeric();
  checkLowercase();
  checkUppercase();
  checkSpecialChar();
  generatePassword();
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Info:
function generatePassword () {
  var pwLength = length;
  console.log(pwLength);
}


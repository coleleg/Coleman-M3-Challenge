// Assignment code here
var length = "";
var numeric = "";
var lowerCase = "";
var upperCase = "";
var special = "";
var numericChars = "0123456789"
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*_-+=";
var includedChars = function() {
   if (numeric === "Y") {
  includedChars += numericChars;
  return includedChars;
}
if (lowerCase === "Y") {
  includedChars += lowerChars;
  return includedChars;
}
if (upperCase === "Y") {
  includedChars += upperChars;
  return includedChars;
}
if (special === "Y") {
  includedChars += specialChars;
  return includedChars;
};
}
console.log("Your included characters are " + includedChars);

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
    return length;
}

// Confirms whether user would like to include numerical values
var checkNumeric = function() {
  numeric = prompt("Would you like to include numerical values in your password? Type 'Y' for YES and 'N' for NO.");
  numeric = numeric.toUpperCase();

    if (numeric === "Y") {
      window.alert("You have selected YES to numerical values.");
  }
    else if (numeric === "N") {
      window.alert("You have selected NO to numerical values.");
    }
      else {
        window.alert("You need to choose a valid option. Try again.");
        checkNumeric();
    }
      console.log("You have selected " + numeric + " to numeric values.");
      return numeric;

  }

  // Confirms whether user would like to use lowercase letters
var checkLowercase = function() {
  lowerCase = prompt("Would you like to include lowercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  lowerCase = lowerCase.toUpperCase();
    if (lowerCase === "Y") {
      window.alert("You have selected YES to lowercase letters.");
  }
    else if (lowerCase === "N") {
      window.alert("You have selected NO to lowercase letters.");
    }
      else {
        window.alert("You need to choose a valid option. Try again.");
        checkLowercase();
      }

  console.log("You have selected " + lowerCase + " to lowercase letters.");
  return lowerCase;
  
  
}

// Confirms whether user would like to use uppercase letters
var checkUppercase = function () {
  upperCase = prompt("Would you like to include uppercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  upperCase = upperCase.toUpperCase();
    if (upperCase === "Y") {
      window.alert("You have selected YES to uppercase letters.");
  }
    else if (upperCase === "N") {
      window.alert("You have selected NO to uppercase letters.");
    }
      else {
        window.alert("You need to choose a valid option. Try again.");
        checkUppercase();
      }
    console.log("You have selected " + upperCase + " to uppercase letters.")
    return upperCase;
}

// Confirms whether user would like to use special characters
var checkSpecial = function() {
  special = prompt("Would you like to include special characters such as '!' or '?' in your password? Type 'Y' for YES and 'N' for NO.");
  special = special.toUpperCase();

      if (special === "Y") {
          window.alert("You have selected YES to special characters.");
      }
      else if (special === "N") {
        window.alert("You have selected NO to special characters.");
      }
        else {
          window.alert("You need to choose a valid option. Try again.");
          checkspecial();
        }
  console.log("You have selected " + special + " to specialacters.")
  return special;
  }

  // Confirms whether user input contained atleast 1 valid character type
  var validateInput = function() {
      if (numeric === "N" && lowerCase === "N" && upperCase === "N" && special === "N") {
        alert("You must select at least one valid character type.  Click 'Generate Password' to try again.");
      }
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
  checkSpecial();
  generatePassword();
  validateInput();
  includedChars();

  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword(length, includedChars);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Info:
 var generatePassword = function (length, includedChars) {
  password = "";
  for (i=0; i < length; i++) {
    password += includedChars (
      Math.floor(Math.random) * includedChars.length)};
      return password;
  }
  






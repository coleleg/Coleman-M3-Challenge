// Assignment code here
var promptCriteria = function() {
  window.alert("Please set the criteria for your password.");
}

var getLength = function() {
  var length = "";
  while (length === "" || length < 8 || length > 128 || length === null) {
    length = prompt("What is the desired length of your passowrd?  Select a value between 8 and 128.")
  }
  
  alert ("You have selected " + length + " characters as your password length.");
  console.log("The length of your password is " + length);
  length = parseInt(length);
  
}

var checkNumeric = function() {
  var numeric = "";
  
  while (numeric === "" || numeric === null) {
  numeric = prompt("Would you like to include numerical values in your password? Type 'Y' for YES and 'N' for NO.");
  }
  if (numeric.toUpperCase === "Y") {
    alert("You have selected YES to numerical values.");
  }
  if (numeric.toUpperCase === "N") {
    alert("You have selected NO to numerical values.");
  }


  

  
  console.log("You have selected " + numeric + " to numerical values.");

var checkLowercase = function() {
  var lowerCase = "";
  if (lowerCase === "" || lowerCase === null) {
    lowerCase = prompt("Would you like to include lowercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  }

  console.log("You have selected " + lowerCase + " to lowercase letters.")
  lowerCase = lowerCase.toUpperCase;
  
}

var checkUppercase = function() {
  var upperCase = "";
  while (upperCase === "" || upperCase === null) {
    upperCase = prompt("Would you like to include uppercase letters in your password? Type 'Y' for YES and 'N' for NO.");
  }
  console.log("You have selected " + upperCase + " to uppercase letters.")
  upperCase = upperCase.toUpperCase;
}

var checkSpecialChar = function() {
  var specialChar = "";
  while (specialChar === "" || specialChar === null) {
    specialChar = prompt("Would you like to include special characters such as '!' or '?' in your password? Type 'Y' for YES and 'N' for NO.");
  }
  console.log("You have selected " + specialChar + " to special characters.")
  specialChar = specialChar.toUpperCase;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptCriteria();
  var passwordInfo = {
    length: getLength(),
    numeric: checkNumeric(),
    lowercase: checkLowercase(),
    uppercase: checkUppercase(),
    special: checkSpecialChar()
  }
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Info:
var lowerChars = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var upperChars = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "/", "?", "|"]

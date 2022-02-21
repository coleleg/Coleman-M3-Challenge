// Password
let password = "";

// Password Criteria
let criteria = {
  length: 0,
  lowerCase: false,
  upperCase: false,
  numbers: false,
  specialCharacters: false,
  // char = character
  charSet: ""
}

// Possible character sets
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet = "0123456789";
const specialSet = "!@#$%^&*()_+-=";

// HTML query
const generateBtn = document.querySelector('#generate');
const passwordTextArea = document.querySelector('#password');


// Prompts User to Input a PW Length
function checkLength () {
  criteria.length = window.prompt("Please enter a desired password length between 8 and 128 characters.");
    if (criteria.length < 8 || criteria.length > 128) {
      alert("Please enter a valid length.")
      checkLength();
    }
};

// Prompts user to choose character sets
function checkCharacters () {
  criteria.lowerCase = window.confirm("Would you like to include lowercase letters?")
  criteria.upperCase = window.confirm("Would you like to include uppercase letters?")
  criteria.numbers = window.confirm("Would you like to include numbers?")
  criteria.specialCharacters = window.confirm("Would you like to include special characters (#$%^ etc.)?")

  if (!criteria.lowerCase && !criteria.upperCase && !criteria.numbers && !criteria.specialCharacters) {
    alert("Your password must include at least one character set.")
    checkCharacters();
  }
console.log(criteria.length);
console.log(criteria.lowerCase);
console.log(criteria.upperCase);
console.log(criteria.numbers);
console.log(criteria.specialCharacters);
};

// Creates a character set based on user input
function createSet () {
  if (criteria.lowerCase) {
    criteria.charSet = criteria.charSet + lowerSet;
  }
  if (criteria.upperCase) {
    criteria.charSet = criteria.charSet + upperSet
  }
  if (criteria.numbers) {
    criteria.charSet = criteria.charSet + numberSet
  }
  if (criteria.specialCharacters) {
    criteria.charSet = criteria.charSet + specialSet
  }
  console.log(criteria.charSet);
};


// Picks characters from a random index of "charSet" and adds them to the password until the length criteria is met
function writePW() {
  for (i=0; i < criteria.length; i++) {
    const charIndex = Math.floor(Math.random() * (criteria.charSet.length + 1));
    password = password + criteria.charSet.charAt(charIndex);
  }
  console.log(password);
  return password;
};

// Reset Criteria and password
function reset () {
  criteria = {
    length: 0,
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialCharacters: false,
    // char = character
    charSet: ""
  }
  password = "";
};

// Begins user prompts and prints password on screen.  Resets on each click.
function generatePassword () {
reset();
console.log(criteria.charSet);
checkLength();
checkCharacters();
createSet();
writePW();
passwordTextArea.innerHTML = password;
};

generateBtn.addEventListener('click', generatePassword);







  






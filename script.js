// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt user for length of password of at least 8 characters and no more than 128 characters
let length = prompt("How many characters do you want your password to contain?")

let confirmLower = confirm("Select 'OK' if you would like to lowercase letters in your passcode?")
let confirmUpper = confirm("Select 'OK' if you would like uppercase letters in your passcode?")
let confirmSpecial = confirm("Select 'OK' if you would like special characters in your passcode")
let confirmNum = confirm("Selct 'OK' if you would like numbers in your passcode")
var passcode = ""


function generatePassword() {



  if (length < 8 || length > 128) {
    alert("Try again. Password must be more than 8 characters and less than 128 characters")
  } else {


    while (passcode.length < length) {

      if (confirmNum === true) {
        //Generate random number
        var newNum = getRandomNum()
      } else {
        var newNum = ""
      }
      if (confirmLower === true) {
        //generate random lowercase character
        var newLow = getRandomLower()
      }
      else {
        var newLow = ""
      }   
      if (confirmUpper === true) {
        //generate random uppercase characters
        var newUpper = getRandomUpper()
      }
      else {
        var newUpper = ""
      }
      if (confirmSpecial === true) {
        //generate random special character
        var newSpecial = getRandomSpecial()
      }
      else {
        var newSpecial = ""
      }
      //concatenate new generated characters in passcode array
      passcode += newNum + newLow + newUpper + newSpecial;
    }
  }
}

//***********************************************************************/
//Generator Functions//

//Generate Random Special Characters
function getRandomSpecial() {

  var specialchars = '!@#$%^&*()-=+?<>/'
  return specialchars[Math.floor(Math.random() * specialchars.length)];

}


//Generate Random Lowercase Characters
function getRandomLower() {
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  return lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];

}

//Generate Random Uppercase Characters
function getRandomUpper() {
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
}

//Generate Random Numeric Characters
function getRandomNum() {
  var numericChar = '0123456789'
  return numericChar[Math.floor(Math.random() * numericChar.length)]

}


//Validation Check of Functions 

//console.log(getRandomLower());
//console.log(getRandomSpecial());
//console.log(getRandomUpper());
//console.log(getRandomNum());
//console.log(passcode)

generatePassword(passcode)

var passwordText = document.querySelector("#password")
passwordText.value = passcode.toString();


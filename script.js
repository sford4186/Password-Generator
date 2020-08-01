// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  console.log(password)
  //var passcode = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}


// Add event listener to generate button
generateBtn.addEventListener("click", questions);


function questions() {
  let charactersToInclude =[]

  //prompt user for length of password of at least 8 characters and no more than 128 characters
let length = prompt("How many characters do you want your password to contain?")

//Verify what characters the user would like to include in the code and call random functions

if (confirm("Select 'OK' if you would like to lowercase letters in your passcode?")){
  charactersToInclude.push(getRandomLower)
}
if(confirm("Select 'OK' if you would like uppercase letters in your passcode?")){
  charactersToInclude.push(getRandomUpper)
}
if(confirm("Select 'OK' if you would like special characters in your passcode")){
  charactersToInclude.push(getRandomSpecial)
}
if(confirm("Selct 'OK' if you would like numbers in your passcode")){
  charactersToInclude.push(getRandomNum)
}
generatePassword(length, charactersToInclude)

}



//Generate passcode
function generatePassword(length, charactersToInclude) {
  var passcode=""

  if (length < 8 || length > 128) {
    alert("Try again. Password must be more than 8 characters and less than 128 characters")
         
  }    

    while (passcode.length < length) {
      
      //concatenate new generated characters in passcode array
      passcode += charactersToInclude[Math.floor(Math.random()* charactersToInclude.length)]()
    }
    console.log(passcode)
    writePassword(passcode)

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




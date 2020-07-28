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

var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower=["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special=["!","@","#","$","%","^","&","*","-","+","/"]
var numeric=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//prompt user for length of password of at least 8 characters and no more than 128 characters
let length=prompt("How many characters do you want your password to contain?")



if (length > 8 && length < 128) {
alert("Great! You chose a password length of: " + length);
confirmLower=confirm("Select 'OK' if you want lowercase letters in your password")
confirmUpper=confirm("Select 'OK' if you would like uppercase letters in your password")
confirmSpecial=confirm("Select 'OK' if you would like special characters in your password")
confirmNum=confirm("Select 'OK' if you would like numbers in your password")
}
  if (confirmLower===true && confirmUpper===true && confirmSpecial===true && confirmNum===true) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=/');
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===true && confirmSpecial===true && confirmNum===true) {
    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=/');
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===false && confirmSpecial===true && confirmNum===true) {
    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '0123456789!@#$%^&*()-=/');
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===false && confirmSpecial===false && confirmNum===true) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '0123456789')
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===false && confirmSpecial===false && confirmNum===false) {

    alert("Invalid. You must select at least one character type")
    
  }
  if (confirmLower===false && confirmUpper===true && confirmSpecial===false && confirmNum===false) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===true && confirmSpecial===true && confirmNum===false) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=+')
    
    alert(rString);
  }
  if (confirmLower===false && confirmUpper===true && confirmSpecial===false && confirmNum===true) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789')
    
    alert(rString);
  }
  
  if (confirmLower===false && confirmUpper===false && confirmSpecial===true && confirmNum===true) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '!@#$%^&*()-+=123456789')
    
    alert(rString);
  }
  if (confirmLower===true && confirmUpper===false && confirmSpecial===true && confirmNum===false) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, '!@#$%^&*()-+=abcdefghijklmnopqrstuvwxyz')
    
    alert(rString);
  }
  if (confirmLower===true && confirmUpper===false && confirmSpecial===false && confirmNum===true) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, 'abcdefghijklmnopqrstuvwxyz123456789')
    
    alert(rString);
  }
  if (confirmLower===true && confirmUpper===true && confirmSpecial===false && confirmNum===false) {

    function randomPass(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    
    var rString = randomPass(length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    
    alert(rString);
  } 
  
  else {


alert ("Password length must be greater than 8 and no more than 128 characters")


  }








  






//Generate a random number

//for (var i = 0; i < 11; i++) {
  // Generate a random decimal number between 0 and 1
  //var num2 = Math.floor(Math.random()*10);

  // Display in console
  //console.log(num2);
//}

//

var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomLetter = getRandomLetter;

while (emptyString.length < 6) {
emptyString += randomLetter;
emptyString ++;
} 
console.log(emptyString);
//let lowercase = confirm("Do you want lowercase letters?")
//let uppercase = confirm ("Do you want uppercase letters?")
//let numeric = confirm ("Do you want numeric values in your password?")
//let specialCharacters = confirm ("Do you want special characters within your password?")

//prompt user for character types - lower case, uppercase, numeric, and/or special characters
//input should be validated and at least 1 character type should be selected
//when all prompts are answered, then the password is generated; the password is either displayed in
//an alert or written to the page





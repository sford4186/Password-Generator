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



var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "/", "?"]






function generatePassword() {

  //prompt user for length of password of at least 8 characters and no more than 128 characters
  let length = prompt("How many characters do you want your password to contain?")

  //confirm characters within password
  confirmLower = confirm("Select 'OK' if you want lowercase letters in your password")
  confirmUpper = confirm("Select 'OK' if you would like uppercase letters in your password")
  confirmSpecial = confirm("Select 'OK' if you would like special characters in your password")
  confirmNum = confirm("Select 'OK' if you would like numbers in your password")

  if (length < 8 || length > 128) {
    alert("Password length must be at least 8 characters and no more than 128 characters")
  }
  else {


    for (var i = 0; i < length; i++) {

      if (confirmNum === true) {

        //select random integer 0-10
        var num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        newPass = [num]
        NewPass++



      }

      if (confirmLower === true) {

        var lower = lowercase[Math.floor(Math.random() * lowercase.length)];
        console.log(lower);
        newLow = [lower]
      }
      else {
        newLow = ""
      }




      if (confirmUpper === true) {
        var upper = uppercase[Math.floor(Math.random() * uppercase.length)];
        console.log(upper);
        newUpper = [upper];
        NewUpper++
      }


      else {
        newUpper = ""
      }

      if (confirmSpecial === true) {
        var special = specialchar[Math.floor(Math.random() * specialchar.length)];
        newSpecial = [special]
        newSpecial++
      }
      else {
        newSpecial = ""
      }


      return passcode = newLow + newPass + newUpper + newSpecial

    }



  }
}

generatePasssword(passcode)

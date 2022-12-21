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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var pLength = 0;
var possibleChar = []; 
var typesChar = {
  upperCase: false,
  lowerCase: false,
  numb: false,
  specialChar: false 
}

//resets values for variables incase users want to generate a new password when pressing "generate button" again. use the function
//askUser to get requirements wanted for the password and length of new password.
//uses a forloop that iterates as many times as the length of the password 
//each iteration of forloop randomly select a possible character within a pool of possible character avaliable based off answers from user and adds its into a variable
// returns the password that was created. 
function generatePassword() {
  var passwordStorage ="";
  possibleChar =[];
  typesChar = {
    upperCase: false,
    lowerCase: false,
    numb: false,
    specialChar: false 
  }
  askUser();
  for(i = 0; i < pLength; i++){
      passwordStorage = passwordStorage + possibleChar[Math.floor(Math.random() * possibleChar.length - 1)];
      console.log(passwordStorage);
  }
  return passwordStorage;
}

function askUser(){
  pLength = prompt('password length?');
  var lengthReq = false;
  var selected = false;
  while(!lengthReq){
    if(pLength < 8){
      pLength = prompt("password needs to be atleast 8 characters long. Please try again");
    } else if (pLength > 128) {
      pLength = prompt("password needs to be less than 128 characters long. Please try again");
    } else{
      lengthReq = true;
      while(!selected) {
        typesChar.upperCase = confirm("Include uppercase?");
        if(typesChar.upperCase) {
          possibleChar.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
          console.log(possibleChar);
        }

        typesChar.lowerCase = confirm("Include Lowercase?");
        if(typesChar.lowerCase){
          possibleChar.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
          console.log(possibleChar);
        }
        typesChar.numb = confirm("Include numbers?");
        if(typesChar.numb){
          possibleChar.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
          console.log(possibleChar);
        }
        
        typesChar.specialChar = confirm("Includes special char?");
        if(typesChar.specialChar){
          possibleChar.push(" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
        }
          console.log(possibleChar);

        if(!(typesChar.upperCase || typesChar.lowerCase || typesChar.numb || typesChar.specialChar)){
          alert("you must select atleast one option");
        } else {
          selected = true;
        }
      }
    }
  }
}
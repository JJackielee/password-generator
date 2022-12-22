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

//variable pLength, possibleChar and object typesChar is global so it can be access throughout the entire code

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
      passwordStorage = passwordStorage + possibleChar[Math.floor(Math.random() * possibleChar.length)];
  }
  return passwordStorage;
}

//initialy asked the users for password length, then checks if its more than 8 chars and less than 128 chars. if not then it'll prompt users to 
//re enter a new number. prompt cycles in a while loop until password length meets requirements. code will know requirement is met when variable 
//"lengthReq" is turned true on line 67

//after password length met requirements it then cycles through critera questions to check what to include with the password. 
//if user confirms yes to each criteria. that list of char in that criteria wil be added into an array that stores the list of all possible characters
//criteria checking is also in a while loop until atleast one criteria is selected. This is tested by a boolean that is stored in the object typesChar
// while loop conditional is met when atleast one criteria is checked and the variable "selected" is true on line 93

function askUser(){
  pLength = prompt('Please enter a password length between 8 and 128');
  console.log("hi");
  var lengthReq = false;
  var selected = false;
  while(!lengthReq){
    if(pLength < 8){
      pLength = prompt("Oops! Password length needs to be atleast 8 characters long. Please try again");
    } else if (pLength > 128) {
      pLength = prompt("Oops! Password needs to be less than 128 characters long. Please try again");
    } else{
      lengthReq = true;
      while(!selected) {
        typesChar.upperCase = confirm("Would you like to include uppercase characters in your password?");
        if(typesChar.upperCase) {
          possibleChar.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        }
        typesChar.lowerCase = confirm("Would you like to include lowercase characters in your password?");
        if(typesChar.lowerCase){
          possibleChar.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
          
        }
        typesChar.numb = confirm("Would you like to include numbers in your password?");
        if(typesChar.numb){
          possibleChar.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");   
        }
        typesChar.specialChar = confirm("Would you like to include special characters in your password?");
        if(typesChar.specialChar){
          possibleChar.push(" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
        }
        if(!(typesChar.upperCase || typesChar.lowerCase || typesChar.numb || typesChar.specialChar)){
          alert("Oops! You need to have atleast one option selected. Please try again");
        } else {
          selected = true;
        }
      }
    }
  }
}
let passwordbox = document.getElementById("password");
let length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-{}[]|?/><~";

let allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
     let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.length)];
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     password += number[Math.floor(Math.random() * number.length)];
     password += symbol[Math.floor(Math.random() * symbol.length)];
     while (password.length<= length) {
          password += allChar[Math.floor(Math.random() * allChar.length)];
     }
     passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}
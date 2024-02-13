// All possible characters in the password to be generated
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const numValues = "0123456789";
const symbols = "!@#$%^&*()-_{}[]()";

// Button selector for generating the password
const passwordBtn = document.getElementById("password-generator");

// Button selector for copying the password
const copyButton = document.getElementById("copy-password");

// Selecting the input tag where the password will be generated
const passwordHolder = document.getElementById("password");

// Maximum possible length of the password
const length = 16;

// All characters in the password
const allCharacters = capitalLetters + smallLetters + numValues + symbols;


// function to generate the password
function generatePassword() {
    // Initializing the password to an empty string
    let password = "";

    password += capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
    password += smallLetters[Math.floor(Math.random() * smallLetters.length)];
    password += numValues[Math.floor(Math.random() * numValues.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordHolder.value = password;
}

// function to copy the password
function copyPassword() {
    passwordHolder.select();
    document.execCommand("copy");
}

// Adding the functionality to the button for generating the password
passwordBtn.addEventListener("click", generatePassword);

// Adding the functionality to the button for copying the password
copyButton.addEventListener("click", copyPassword);

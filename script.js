
// Declaring the variables

var generatePasswordButton = document.getElementById("generate");
var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var onlyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var onlySpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];

// Password generate options..and questions about should it include number..lower case and uppercase etc...

function generatePassword() {

    var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));

    if (passwordLength < 8) {
        alert('The password must be at least 8 characters!');
        return;
    }
    if (passwordLength > 128) {
        alert('The password must be less than 128 characters!');
        return;
    }
    var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
    //prompt user for numeric characters
    var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
    
    //prompt user for lowercase characters
    var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
    
    //prompt user for uppercase characters
    var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
    // alets and stops user if aything picked
    if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
        alert("Your password must contain at least one special, numeric, lowercase or uppercase character");
        return;
    }
    var passwordPool = [];
// adding special characters to the password pool array 
    if (shouldIncludeSpecialCharacters) {
        for (i = 0; i < onlySpecial.length; i++) {
            passwordPool.push(onlySpecial[i]);
        }
    } 
    if (shouldIncludeNumeric) {
        for (i = 0; i < onlyNumeric.length; i++) {
        passwordPool.push(onlyNumeric[i]);
        }
    }
    if (shouldIncludeLowercase) {
        for (i = 0; i < onlyLower.length; i++) {
        passwordPool.push(onlyLower[i]);
        }
    }
    if (shouldIncludeUppercase) {
        for (i = 0; i < onlyUpper.length; i++) {
        passwordPool.push(onlyUpper[i]);
        }
    }
    var finalPassword = [];
// selecting a final password from password pool
    for (let i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * passwordPool.length);
        finalPassword.push(passwordPool[randomIndex]);
    }
    //  removing quotes and comas from final password
    var superPassword = finalPassword.join('');
// display final password
    document.getElementById("password").textContent = superPassword;
}
generatePasswordButton.addEventListener("click", generatePassword);
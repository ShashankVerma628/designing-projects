const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
// Show Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check email is valid or not

function checkEmail(input) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, "Email is not valid");
    }
}

// check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        // console.log(input.value);
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

// Check input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be lesss than ${max}`);
    }
    else {
        showSuccess(input);
    }
}

// Check passwords mach

function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"Passwords do not match");
    }
}

// get fieldname

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

});












// use this function with below handlers
// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }


// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (username.value === "") {
//         showError(username, "Username is required");
//     }
//     else {
//         showSuccess(username);
//     }
//     if (email.value === "") {
//         showError(email, "Email is required");
//     }
//     else if (!validateEmail(email.value)) {
//         showError(email, "Email is not valid");
//     }
//     else {
//         showSuccess(email);
//     }
//     if (password.value === "") {
//         showError(password, "Password is required");
//     }
//     else {
//         showSuccess(password);
//     }
//     if (password2.value === "") {
//         showError(password2, "Password is required");
//     }
//     else {
//         showSuccess(password2);
//     }
// });
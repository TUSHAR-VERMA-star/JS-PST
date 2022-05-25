
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smalll = formControl.querySelector('small');
    smalll.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email.value).toLowerCase());
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'password is not same')
    }
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, "Username is required");
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, "email is required");
    }
    else if (!isValidEmail(email.value)) {
        showError(email, 'enter a valid email id')
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'password is required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'password is required');
    }
    else{
        showSuccess(password2);
    }

    checkPassword(password, password2)
});
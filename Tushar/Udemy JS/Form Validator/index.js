const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

function showerror(input, message)
{
    const form_val = input.parentElement
    form_val.className = "form-control error"
    const x = form_val.querySelector('small')
    x.innerText = message
}
function showsuccess(input)
{
    const form_val = input.parentElement
    form_val.className = "form-control success"
}
function isvalid(email)
{
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}
form.addEventListener('submit', function(e)
{
    e.preventDefault()
    if(username.value === '')
    {
        showerror(username,"this is Required")
    }
    else
    {
        showsuccess(username)
    }
    if(email.value === '')
    {
        showerror(email,"this is Required")
    }
    else if(!isvalid(email.value)){
        showerror(email,"this is not correct")
    }
    else
    {
        showsuccess(email)
    }
    if(password1.value === '')
    {
        showerror(password1,"this is Required")
    }
    else
    {
        showsuccess(password1)
    }
    if(password2.value === '')
    {
        showerror(password2,"this is Required")
    }
    else
    {
        showsuccess(password2)
    }
})
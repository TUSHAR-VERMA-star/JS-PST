let str = [];
function addition()
{
    let val = document.getElementById("add").value
    str.push(val)
    console.log(str)
    document.getElementById("add").value = ""
    disp()
    
}
function disp()
{
    document.getElementById("dis").innerHTML = "";
    for(let i = 0 ; i < str.length ; i++)
    {
        document.getElementById("dis").innerHTML += "<li> " + str[i] + "</li>"
    }
}
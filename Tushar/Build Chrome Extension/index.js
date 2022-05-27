let inputbtn = document.getElementById("input-btn")
let mylist = []
let inputval = document.getElementById("input-text")
let unorderlist = document.getElementById("uol");

inputbtn.addEventListener("click", function()
{
    mylist.push(inputval.value)
    // console.log(mylist)
    inputval.value = ""
    helper()
    
})
function helper()
{
    unorderlist.textContent = ""
    for(let i=0; i<mylist.length; i++)
    {
        unorderlist.innerHTML += "<li>" + mylist[i]+ "</li>" 
    }
}


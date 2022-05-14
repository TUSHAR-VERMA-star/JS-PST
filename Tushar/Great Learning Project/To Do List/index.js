function addd()
{
    let item = document.getElementById("input-val")

    let list_item = document.getElementById("printed")

    let make_li = document.createElement("li")

    make_li.appendChild(document.createTextNode(item.value))
    item.value =""

    list_item.appendChild(make_li)

    make_li.onclick=function()
    {
        this.parentNode.removeChild(this);  
    }
}
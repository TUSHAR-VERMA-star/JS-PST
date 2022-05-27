function add(){

    let item = document.getElementById("input")
    console.log(item)
    let make_li = document.getElementById("add").innerHTML += "<li>" + item.value + "</li>" 

    make_li.onclick()=function(){

        this.parentNode.removeChild(this);

    }
}
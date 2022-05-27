function clearr(){

    document.getElementById("input").value = " "
}

function display(val){

    document.getElementById("input").value +=val;

}

function result(){

    let x = document.getElementById("input").value
    let y = eval(x);
    document.getElementById("input").value = y;
}

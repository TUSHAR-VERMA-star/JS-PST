
let count = 1
function calculate(val) {
    document.getElementById(val).textContent = count
    document.getElementById(val).style.backgroundColor = "cyan";
    document.getElementById("selected-btn").style.backgroundColor = "cyan";

    const collection = document.getElementsByClassName("occupied-btn");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "pink";
    }
    
    document.getElementById("price").textContent = "you have selected " + count + "seats and total cost is " + count*10

}
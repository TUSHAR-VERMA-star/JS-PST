function showTime(){

var current = new Date();
console.log(current.toLocaleTimeString())
document.getElementById("timee").innerHTML = current.toLocaleTimeString()

setTimeout(showTime, 1000)
}

showTime();
function showTime()
{
    var current = new Date();
    document.getElementById("timee").innerHTML=current.toLocaleTimeString();
    setTimeout(showTime, 1000);
}



showTime();
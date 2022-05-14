function digitalClock()
{
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var ampm = "AM"

    if(h==0)
    {
        h=12
    }
    if(h>12)
    {
        h=h-12
        ampm="PM"
    }

    document.getElementById("digitalclock").innerHTML = h + ":" + m + ":" + s + " " + ampm
    setTimeout(digitalClock, 1000)
}
document.getElementById("digitalclock").innerHTML = "Hello"
digitalClock()
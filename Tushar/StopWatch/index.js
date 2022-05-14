var h = 0
var m = 0
var s = 0
var ans 
var stopp = false
var timer
function start()
{
    if (stopp===true)
    {
        if(timer)
        {
            clearTimeout(timer) 
            stopp = false
        }
    }
    else{
        if(m == 59)
        {
            h+=1
            m = 0
        }
        if(s == 60)
        {
            m += 1
            s = 0
        }
        s+=1;
        ans = h+":"+m+":"+s
        document.getElementById("timee").textContent = ans 
        timer = setTimeout(start, 1000)
    }
    

}
function stop()
{
    stopp = true
    start()
}

function save()
{
    document.getElementById("list_print").innerHTML += "<li>" + ans + "</li>"
}
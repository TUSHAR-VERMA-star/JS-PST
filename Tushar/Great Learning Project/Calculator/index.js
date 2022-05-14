function values(val)
{
    document.getElementById("question").value += val
}

function result()
{
    var x = document.getElementById("question").value
    var y = eval(x)
    document.getElementById("question").value = y
}

function clearr()
{
    document.getElementById("question").value = " "
}
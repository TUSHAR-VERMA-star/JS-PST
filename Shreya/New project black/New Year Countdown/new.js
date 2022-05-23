
helper()

function helper(){
    var today = new Date();
var date = today.getDate();


var month = today.getMonth();
var remaining_days = 365 - ((month) * 30 + date) ;

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var ans = remaining_days + "&nbsp&nbsp&nbsp&nbsp&nbsp" + hours + "&nbsp&nbsp&nbsp&nbsp&nbsp" + minutes + "&nbsp&nbsp&nbsp&nbsp&nbsp" + seconds;
    document.getElementById("count").innerHTML=ans;

    setTimeout(helper, 1000);
}
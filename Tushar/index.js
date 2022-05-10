let count=0;
let save=false;

let s = " Tushar";
let value = document.getElementById("welcome-ele").innerHTML;
let tobeprinted = value + s;
document.getElementById("welcome-ele").innerHTML = tobeprinted;

function increment()
{
  if(save)
  {
    document.getElementById("print-kro").innerHTML = count;
  }
  else
  {
    count+=1;
    console.log(count);
    document.getElementById("print-kro").innerHTML = count;
  }
   
}
function savef()
{
  save=true;
  
}
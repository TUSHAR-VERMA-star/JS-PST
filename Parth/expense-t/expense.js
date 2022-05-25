let income=0;
let expense=0;
let balance =0;

function entry()
{
    let trans_text =document.getElementById("trans-d").value;
    let trans_amt = document.getElementById("trans-a").value;
    trans_amt = Number(trans_amt);
    if(trans_amt>=0)
    {
        income += trans_amt;
    }
    else{
        expense += trans_amt*-1;
    }
    balance = income-expense;
    document.getElementById("your-bal").textContent = balance;
    document.getElementById("income").textContent = income;
    document.getElementById("expense").textContent = expense;
    document.getElementById("trans").innerHTML += "<li>" + trans_text + "   " + trans_amt + "</li>";
}
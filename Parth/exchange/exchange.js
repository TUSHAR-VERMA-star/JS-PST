const amt_one = document.getElementById('amount-one')
const cur_one = document.getElementById('currency-one')

const amt_two = document.getElementById('amount-two')
const cur_two = document.getElementById('currency-two')

var swap = document.getElementById('swap')

function calculate(){
    console.log(amt_one.value);
}

// amt_one.addEventListener('input',calculate)
// cur_one.addEventListener('change',calculate)
// amt_two.addEventListener('input',calculate)
// cur_two.addEventListener('change',calculate)
// swap.addEventListener('click', calculate)
calculate()
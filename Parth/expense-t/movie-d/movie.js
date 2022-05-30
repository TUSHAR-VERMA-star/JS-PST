const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)')
var price = +document.querySelector('#movie').value
const countseat = document.getElementById('count');
const total = document.getElementById('total');

const selector = document.getElementById('movie');

selector.addEventListener('change' , (e) => {
    price = e.target.value;
    countNoOfSeat();
})

function countNoOfSeat()
{
    var count = document.querySelectorAll('.row .seat.selected')
    countseat.textContent = count.length;
    var totalprice = count.length * price;  
    total.textContent = totalprice;

}

container.addEventListener('click', function(e)
{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
    }
    countNoOfSeat();
})

<<<<<<< HEAD
const container = document.querySelector('.container')
const ticketPrice = +document.getElementById('movie').value

container.addEventListener('click', function (e)
{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected')
        if(e.target.classList.contains('selected'))
        {
            var c = +document.getElementById('count').textContent
            c+=1
            document.getElementById('count').textContent = c
            document.getElementById('total').textContent = c*ticketPrice
        }
        else
        {
            var c = +document.getElementById('count').textContent
            c-=1
            document.getElementById('count').textContent = c
            document.getElementById('total').textContent = c*ticketPrice
        }
        
    }
})
=======
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});
>>>>>>> 897091b098e8317b4a159c2668695996d0b3c422

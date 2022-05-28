var container = document.querySelector('.container')
var seats = document.querySelectorAll('.row .seat:not(.occupied)') 
var selectorr = document.getElementById('movie')
var count = document.getElementById('count')
var ticketPrice = document.getElementById('movie')
var priceInInt = +ticketPrice.value

function showprice()
{
    var totalseatBooked = document.querySelectorAll(".row .seat.selected")

    const seatsIndex = [...totalseatBooked].map(function(seat)
        {
            return [...seats].indexOf(seat)
        } 
        );

    localStorage.setItem('selectedSeatIndex', JSON.stringify(seatsIndex))

    var seatcount = totalseatBooked.length
    count.textContent = seatcount
    var totalPrice = seatcount * priceInInt
    document.getElementById('total').textContent = totalPrice
}

selectorr.addEventListener('change', (e) =>
{
    ticketPrice = e.target
    priceInInt = +ticketPrice.value
    showprice()
})

container.addEventListener('click', (e) => {
    var clickedElement = e.target
    if (clickedElement.classList.contains('seat') &&
        !clickedElement.classList.contains('occupied')) {

        clickedElement.classList.toggle('selected')
    }
    showprice();
})
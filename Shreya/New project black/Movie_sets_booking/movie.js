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
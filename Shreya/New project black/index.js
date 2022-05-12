let firstCard = 10
let secondCard = 5
let iscard=false;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardd = document.getElementById("card")
let summ = document.getElementById("sum")
let card = 0;
// 2. Store the sum paragraph in a variable called sumEl

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    
    
    summ.innerHTML = "ANS = " + sum;
    if(iscard)
    {
        cardd.innerHTML = "Card = " + firstCard + " " + secondCard +" "+ card;
    }
    else
    {
        cardd.innerHTML = "Card = " + firstCard + " " + secondCard;
    }
    

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newGame()
{
    card = Math.floor(Math.random() *(11 - 2)+ 2)
    iscard=true;
    sum+=card;
    startGame(); 
}
let firstCard = 10
let secondCard = 5
let arr = [firstCard, secondCard]
let iscard=false;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardd = document.getElementById("card")
let summ = document.getElementById("sum")
let card = 0;

function startGame() {
    summ.innerHTML = "ANS = " + sum;
    let ans = " "
    for(let i=0; i<arr.length; i++)
    {
        ans+=arr[i]+" ";
    }
    cardd.innerHTML = "Card = " + ans;
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        document.getElementById("newcard").textContent="END GAME"
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        document.getElementById("newcard").textContent="END GAME"
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newGame()
{
    if(sum<=21)
    {
        card = Math.floor(Math.random() *(11 - 2)+ 2)
        arr.push(card);
        iscard=true;
        sum+=card;
        startGame(); 
    }
    else{
        document.getElementById("newcard").textContent="END GAME"
    }
    
}
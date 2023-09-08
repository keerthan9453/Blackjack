
let firstCard = 10
let SecondCard = 4
let cards = [firstCard, SecondCard]
let sum = firstCard + SecondCard
let message = ""
let isAlive = true
let hasBlackJack = false
let sumel = document.getElementById("sum-el")
let MessageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")


function StartGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = 'Cards: '
    sumel.textContent = 'SUM: ' + sum
    for (let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
        
    if (sum <= 20){
        message = "Do u want a new card ?"
    } 
    else if(sum === 21){
        message = "You've got BLACKJACK!" 
        hasBlackJack = true
    }else{
        message = "Your out of the game 😞"
        isAlive = false
    }   
    MessageEl.textContent = message
}
function NewCards() {
    console.log("Drawing a new card from the deck")
    let card = 8
    sum+= card
    cards.push(card)
    renderGame()
}



let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let sumel = document.getElementById("sum-el")
let MessageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chip: 145
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $"+ player.chip
function randomNumber()
{
    let random_num = Math.floor( Math.random() * 13) + 1
    
    if (random_num > 10)
    {
        return 10
    }
    else if (random_num == 1){
        return 11
    }
    else {
        return random_num
    }
}
function StartGame(){
    isAlive = true
    let firstCard = randomNumber()
    let SecondCard = randomNumber() 
    cards = [firstCard , SecondCard]
    sum = firstCard + SecondCard
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
    //console.log("Drawing a new card from the deck")
    if (isAlive == true && hasBlackJack == false){
        let card = 8
        sum+= card
        cards.push(card)
        renderGame()
        
    }
    
}

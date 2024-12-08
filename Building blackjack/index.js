// let round=0;
let messageEle = document.querySelector(".message-ele");
let sumEle = document.getElementById("sum-ele");
let cardEle = document.querySelector(".cards");
// let card2Ele = document.querySelector(".card-2");
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let cardsArr = [];

let player = {
  //player object
  name: "Aniket",
  chips: 129,
  greeting: function () {
    console.log("Hello!, everybody");
  },
};
let playerEle = document.getElementById("player-ele");
playerEle.textContent = player.name + " : $" + player.chips;

function startGame() {
  hasBlackJack = false;
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cardsArr = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random == 1) {
    return 11;
  } else if (random >= 11) {
    return 10;
  } else {
    return random;
  }
}

function renderGame() {
  // sum = firstCard + secondCard;
  // card1Ele.textContent = cardsArr[0];
  // card2Ele.textContent = cardsArr[1];
  cardEle.textContent = "Cards :";
  for (let i = 0; i < cardsArr.length; i++) {
    cardEle.textContent += cardsArr[i] + " ";
  }

  // console.log("Round: "+round)
  // console.log(sum);

  let message = "";
  if (sum <= 20) {
    message = "Do you want to draw a new card?"; // 😊
  } else if (sum === 21) {
    message = "You've got Blackjack"; // 🥳
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game"; // 😟
  }
  sumEle.textContent = "Sum : " + sum;
  messageEle.textContent = message;
  // alert(message)
  // console.log("BlackJack: "+hasBlackJack)
  // console.log("isAlive: "+isAlive)
  // if(sum!=21){
  //   round++
  //   console.log(message)
  //   console.log("---------------------------------------------")

  //   // untillWin()
  // }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cardsArr.push(card);
    // alert(sum)
    messageEle.textContent = "Drawing a new Card";
    renderGame();
  }
}

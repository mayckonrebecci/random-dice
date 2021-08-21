let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let btn = document.querySelector(".button");
let h1 = document.querySelector("h1");

const btnRoll = () => {
    randomNumberDice1 = Math.floor(Math.random() * 6) + 1;
    randomNumberDice2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `images/dice${randomNumberDice1}.png`;
    dice2.src = `images/dice${randomNumberDice2}.png`;

    if (randomNumberDice1 > randomNumberDice2) {
        h1.innerText = "🚩 Player 1 Wins"
    }
    else if (randomNumberDice2 > randomNumberDice1){
        h1.innerText = "Player 2 Wins 🚩"
    }
    else {
        h1.innerText = "🏴 DRAW! 🏴"

    }
}

btn.addEventListener("click", btnRoll);

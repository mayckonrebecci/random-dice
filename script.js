let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let btn = document.querySelector(".button");

const btnRoll = () => {
    randomNumberDice1 = Math.floor(Math.random() * 6) + 1;
    randomNumberDice2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `images/dice${randomNumberDice1}.png`;
    dice2.src = `images/dice${randomNumberDice2}.png`;
}

btn.addEventListener("click", btnRoll);

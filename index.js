//img1
var randomImage1 = ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1 = Math.floor(Math.random() *6);
var igrac1 = document.querySelector(".img1").src = randomImage1[randomNumber1];
//img2
var randomImage2 = ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber2 = Math.floor(Math.random() *6);
var igrac2 = document.querySelector(".img2").src = randomImage2[randomNumber2];

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player 1 wins !";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins !🏆";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}

                                                                                                                    
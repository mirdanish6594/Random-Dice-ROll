//     Player-1
var randomNumber1 = Math.floor(Math.random()*6) + 1; // Here we multiplied math.random with 6 and then added 1 which would
//generate a range of numbers from 1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // Here, due to math.random, the value of randomNumber1 will
// keep changing and hence the name of the images will also keep changing. Thereby, displaying new images.
var image1 = document.querySelectorAll("img")[0]; // we used this to access the 1st daughter element, whose index is 0
image1.setAttribute("src", randomDiceImage); // setAttribute(towhat, fromwhat)

//    Player-2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage);

// Here, we use simple conditionals to decide who wins the random dice game
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw.";
}

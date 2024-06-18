var randomNumber1 = Math.random();
var rnum1 = Math.floor(randomNumber1 * 6) + 1;
console.log(rnum1);

if (rnum1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (rnum1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (rnum1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (rnum1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (rnum1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}
var randomNumber = Math.random();
var rnum = Math.floor(randomNumber * 6) + 1;
console.log(rnum);

if (rnum === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (rnum === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (rnum === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (rnum === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (rnum === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}
if (rnum1 < rnum) {
    document.querySelector("h1").textContent = "Player 2 Wins"
} else if (rnum1 > rnum) {
    document.querySelector("h1").textContent = "Player 1 Wins"
} else {
    document.querySelector("h1").textContent = "Draw!"
}
// var rn1 = Math.floor(Math.random() * 6)+1;
// console.log(rn1);
// var image_source = "./images/dice"+rn1+".png";
// console.log(image_source);
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", image_source);

// var rn2 = Math.floor(Math.random() * 6) + 1;
// var image_source2 = "/images/dice"+rn2+".png";
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src" , image_source2);
// if(rn1 > rn2){
//     document.querySelector("h1").textContent = "Player 1 wins";
// }else if(rn1 < rn2){
//     document.querySelector("h1").textContent = "Player 2 wins";
// }else{
//     document.querySelector("h1").textContent = "Draw";
// }

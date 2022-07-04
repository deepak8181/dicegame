var randomvariable1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "images/dice"+randomvariable1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "images/dice"+randomvariable2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if (randomimage1 > randomimage2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 win.";
}
else if (randomimage2 > randomimage1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 win.";
}
else{
    document.querySelector("h1").innerHTML = " Draw!."
}
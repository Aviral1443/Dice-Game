var value1=Math.floor(Math.random()*6)+1;
var value2=Math.floor(Math.random()*6)+1;

while(value1==value2)
{
    value2=Math.floor(Math.random()*6)+1;
}

var diceImage1="./images/dice"+value1+".png";
var diceImage2="./images/dice"+value2+".png";


if(value1>value2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 is the winner";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 is the winner🚩";
}

document.querySelectorAll("img")[0].setAttribute("src",diceImage1);
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
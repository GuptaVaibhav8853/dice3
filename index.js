var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var dicex="images/"+"dice"+randomNumber1+".png";
var dicey="images/"+"dice"+randomNumber2+".png";
// document.querySelectorAll("img")[0].setAttribute("src",dicex);
// document.querySelectorAll("img")[1].setAttribute("src",dicey);
document.querySelectorAll("img")[0].src=dicex;
document.querySelectorAll("img")[1].src=dicey;
if(randomNumber1>randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML="🚩Player1 Wins";
}
else if(randomNumber2>randomNumber1){
      document.querySelectorAll("h1")[0].innerHTML="Player2 Wins🚩";
}
else{
  document.querySelectorAll("h1")[0].innerHTML="Draw!";
}

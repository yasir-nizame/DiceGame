 var randomNumber1=Math.floor(Math.random()*6)+1;


 var randomNumber2=Math.floor(Math.random()*6)+1;

 var dice1 = "/images/dice" + randomNumber1 +".png";
 var dice2 = "/images/dice" + randomNumber2 +".png";

 document.querySelectorAll("img")[0].setAttribute("src", dice1);
 document.querySelectorAll("img")[1].setAttribute("src", dice2);

  if(randomNumber1>randomNumber2){
      document.querySelectorAll("h1")[0].innerHTML=" 🚩Player 1 wins !";
  }

  else if(randomNumber1<randomNumber2){
      document.querySelectorAll("h1")[0].innerHTML=" 🚩Player 2 wins !";
  }

  else{
      document.querySelectorAll("h1")[0].innerHTML="⚔️ Draw !";

  }

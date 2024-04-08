function randomfunction() {
  var card1 = [
    "King.png"
  ];
  let randomimg = card1.length;
  cardd.src = card1[randomimg];
  let randomnum = "Score 13";
  output.innerHTML = [randomnum];

  var card2 = [
    "queen.png"
  ];
  let randomimg2 = Math.floor(Math.random() * card2.length);
  cardd.src = card2[randomimg2];
  let randomnum2 = "Score 12";
  output.innerHTML = [randomnum2];

  var card3 = [
    "jack.jpg"
  ];
  let randomimg3 = Math.floor(Math.random() * card3.length);
  cardd.src = card3[randomimg3];
  let randomnum3 = "Score 11";
  output.innerHTML = [randomnum3];


  var functionlength = [card1, card2, card3]
  var num = [randomnum, randomnum2, randomnum3];
  var result = Math.floor(Math.random() * functionlength.length);


  output.textContent = num[result];
  var a = num[result];
  cardd.src = functionlength[result];


  var functionlength2 = [card1, card2, card3]
  var num2 = [randomnum, randomnum2, randomnum3];
  var result2 = Math.floor(Math.random() * functionlength2.length);


  output2.textContent = num2[`${result2}`];
  var b = num2[result2];
  cardd2.src = functionlength2[result2];




  if (a > b) {
    document.getElementById("winner").innerHTML = `Player 1 Win 🏆`;
  }
  else if (a < b) {
    document.getElementById("winner").innerHTML = `Player 2 Win 🏆`;
  }
  else {
    document.getElementById("winner").innerHTML = `Match Draw 🤝`;

  }

};
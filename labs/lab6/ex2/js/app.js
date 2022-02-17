//Justin Tychek
//2/16/2022

//define the ID as a variable
let divBeep = document.getElementById("divBeep");

//print out each iterand
for (let i = 1; i < 26; i++) {
  divBeep.innerHTML += i + "<br>";

  //when i is divisible by 3, print "Beep"
  if (i % 3 === 0) {
    divBeep.innerHTML += "Beep <br>";
  }
  //when i is divisible by 5, print "Bop"
  if (i % 5 === 0) {
    divBeep.innerHTML += "Bop <br>";
  }
}

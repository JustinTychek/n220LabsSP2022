//Justin Tychek
//3/29/2022

//define the IDs as a variable
let txtInput = document.getElementById("txtInput");
let dvResults = document.getElementById("dvResults");

//array of words to check
let badWords = ["clear", "water", "tires"];

//function that checks if the user's input has bad words
function checkWords() {
  //variable that stores the user's input
  let words = txtInput.value;

  //splits the user's input into individual words and makes them an array
  let splitWords = words.split(" ");

  //tally for how many bad words the user inputted
  badTally = 0;

  //loops through the user's words and checks them against the bad words
  for (let i = 0; i < splitWords.length; i++) {
    for (let j = 0; j < badWords.length; j++) {
      if (splitWords[i] == badWords[j]) {
        badTally++;
      }
    }
  }

  //displays how many bad words there were in a div on the pagef
  dvResults.innerHTML = "found " + badTally + " bad words";

  //clears the textbox
  txtInput.value = "";
}

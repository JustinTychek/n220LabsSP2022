//Justin Tychek
//3/29/2022

//define the IDs as a variable
let txtInput = document.getElementById("txtInput");
let dvSum = document.getElementById("dvSum");
let dvAverage = document.getElementById("dvAverage");

//function that calculates the sum of the user's input
function calcSum() {
  //user's input
  var stringVals = txtInput.value;

  //creates an array out of the user's input
  let myArray = stringVals.split(",");

  //create a variable for the sum
  let sum = 0;

  //takes the array and calculates the sum
  for (let i = 0; i < myArray.length; i++) {
    sum += Number(myArray[i]);
  }

  //puts the sum into a div on the page
  dvSum.innerHTML = "Sum: " + sum;
}

//function that calculates the average of the user's input
function calcAverage() {
  //user's input
  var stringVals = txtInput.value;

  //creates an array out of the user's input
  let myArray = stringVals.split(",");

  //create a variable for the sum
  let sum = 0;

  //takes the array and calculates the sum
  for (let i = 0; i < myArray.length; i++) {
    sum += Number(myArray[i]);
  }

  //calculates the average
  let average = sum / myArray.length;

  //puts the average into a div on the page
  dvAverage.innerHTML = "Average: " + average;
}

//function that activates when the button is clicked
function onClick() {
  calcSum();
  calcAverage();
  txtInput.value = "";
}

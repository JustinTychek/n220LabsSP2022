//Justin Tychek
//2/16/2022

//define the ID as a variable
let divNumb = document.getElementById("divNumb");

//create an array for the numbers
let numbers = [1000, 2000, 3000, 4000, 5000];

//create a loop that goes through the array and displays the numbers
for (let i = 0; i < numbers.length; i++) {
  divNumb.innerHTML += numbers[i] + "<br>";
}

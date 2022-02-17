//Justin Tychek
//2/16/2022

//define the IDs as a variable
let second = document.getElementById("second");
let third = document.getElementById("third");

//create the array that has the best times
let bestTimes = [15, 18, 20];

//display the second best and third best in the two divs
second.innerHTML = bestTimes[1] + " seconds";
third.innerHTML = bestTimes[2] + " seconds";

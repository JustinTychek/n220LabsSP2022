//Justin Tychek
//2/16/2022

//define the ID as a variable
let divFavorite = document.getElementById("divFavorite");

//create the array of favorite things
let favThings = ["Cake", "Ice cream", "Video games", "YouTube", "Sleep"];

//display all the favorite things in the div and add on the extra text
for (let i = 0; i < favThings.length; i++) {
  divFavorite.innerHTML += favThings[i] + ", is one of my favorite things <br>";
}

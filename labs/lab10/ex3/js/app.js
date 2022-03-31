//Justin Tychek
//3/29/2022

//define the IDs as a variable
let dvDisplay = document.getElementById("dvDisplay");

//array of objects
let objects = [
  { color: "#FF0000", height: 100, width: 300 },

  { color: "#FFFF00", height: 200, width: 200 },

  { color: "#ff0000", height: 300, width: 100 },
];

//loop that takes the objects and makes them styles for new divs on the page
for (let i = 0; i < objects.length; i++) {
  //create new divs
  let newElement = document.createElement("div");

  //style the new divs using the attributes from the array
  newElement.style.backgroundColor = objects[i].color;
  newElement.style.height = objects[i].height + "px";
  newElement.style.width = objects[i].width + "px";

  //append the new divs inside the div on the page
  dvDisplay.appendChild(newElement);
}

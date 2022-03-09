//Justin Tychek
//3/9/2022

//define the IDs as a variable
let txtName = document.getElementById("txtName");

//function that is executed when the button is clicked
function helloName() {
  //create a variable that stores the user's input
  let name = txtName.value;
  //write out the user's input plus hello in the console
  console.log("Hello " + name);
  //clear the input field after the user clicks the button
  txtName.value = "";
}

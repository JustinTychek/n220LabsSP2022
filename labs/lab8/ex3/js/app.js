//Justin Tychek
//3/9/2022

//define the ID as a variable
let txtUser = document.getElementById("txtUser");
let txtPass = document.getElementById("txtPass");
let dvResult = document.getElementById("dvResult");

//function that is called when the button is clicked
function checkInput() {
  //create variables for the username and password
  let username = txtUser.value;
  let password = txtPass.value;

  //if the user's input matches the username and password, give a success, otherwise, say wrong information
  if (username == "Username" && (password = "Password")) {
    dvResult.innerHTML = "Success";
  } else {
    dvResult.innerHTML = "Wrong Information";
  }

  //clear the username and password inputs
  txtUser.value = "";
  txtPass.value = "";
}

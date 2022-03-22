//Justin Tychek
//3/22/2022

//define the IDs as a variable
let txtDivisible = document.getElementById("txtDivisible");
let dvResult = document.getElementById("dvResult");

//function that determines whether the input is divisible by 7 or not
function divisibleSeven() {
  let number = Number(txtDivisible.value);

  if (number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

//function that is executed when the button is clicked
function clickDivision() {
  let check = divisibleSeven();
  if (check == true) {
    dvResult.innerHTML = "Divisible by 7";
  } else {
    dvResult.innerHTML = "NOT divisible by 7";
  }
}

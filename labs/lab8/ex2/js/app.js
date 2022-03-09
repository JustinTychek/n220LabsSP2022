//Justin Tychek
//3/9/2022

//define the ID as a variable
let txtName = document.getElementById("txtName");

function calculateTip() {
  let price = Number(txtName.value);
  let tip = price * 0.2;
  let total = price + tip;

  let tipRound = tip.toFixed(2);
  let totalRound = total.toFixed(2);

  console.log(`Tip: $${tipRound}. Total: $${totalRound}`);

  txtName.value = "";
}

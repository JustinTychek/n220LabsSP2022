//Justin Tychek
//4/6/2022

//take the ids and make them variables
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let answerDiv = document.getElementById("answerDiv");

//add event listener for when the button is clicked
question1.addEventListener("click", listAnswer);
question2.addEventListener("click", listAnswer);
question3.addEventListener("click", listAnswer);

//function that lists the answer to the question in a div using the data attribute
function listAnswer(event) {
  answer = event.target.getAttribute("data-answer");
  answerDiv.innerHTML = "";
  answerDiv.innerHTML = answer;
}

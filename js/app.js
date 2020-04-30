window.onload = function() {
  document.getElementById("quiz1").onclick = quiz;
  let response;
}
const quiz = function() {
  alert("You are about to take a quiz.");
  response = prompt("Would you like to take the quiz?")
  response = response.toLowerCase;
  if (response == "yes") {
    // trying to link to quiz.html page where we will start to pose q's
    button.innerhtml = "href = quiz.html"
    }
  else if (response == "no") {
    window.onsubmit("index.html")
  }
  else if (response == null) {
    // on purpose
  }
  }

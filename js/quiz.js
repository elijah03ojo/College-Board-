/* Features in quiz
1. Timing = points
2. Multiple choice 4 options points if right no points if wrong
3. Scoreboard
4. 25 questions but only 10 appear?
*/


const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGage = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");



let questions = [
      {
        question : "Question number one?",
        imgSrc  : "put image here"                    //This line of code is for images related to the questions we have//
        choiceA : "answer one",
        choiceB : "answer two",
        choiceC : "answer three",
        correct : "A"                 //We must make choice A the correct answer//
      },






]

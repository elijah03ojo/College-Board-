/* Features in quiz
1. Timing = points
2. Multiple choice 3 options points if right no points if wrong
3. 25 questions but only 10 appear?

I think this is too complicated. I say just two Features (and no image)
1. Time = Reload page after 5 minutes
2. Multiple choice 3 options, after submit, tells you how many right/wrong
*/

const quiz = document.getElementById("quiz");

// const qImg = document.getElementById("questionImage");

const question = function() {
const counter = document.getElementById("counter");

const timeGage = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");



let questions = [
      {
        question : "What is FICA tax?",
        choiceA : "Social Security and Medicare",
        choiceB : "Federal Income Tax",
        choiceC : "Federal Income Charge Associaton Tax",
        correct : "A"
      },

      {
        question : "What taxes do you pay after gross income?",
        choiceA : "Citizen Tax",
        choiceB : "Gas Tax",
        choiceC : "FICA",
        correct : "C"
      },

      {
        question : "How much is the FICA tax?",
        choiceA : "9.58%",
        choiceB : "7.65%",
        choiceC : "6.2%",
        correct : "B"
      },

      {
        question : "What is economics?",
        choiceA : "The study of decisions that go into making, distributing, and using goods and services",
        choiceB : "The study of economics",
        choiceC : "The study of the world's economies",
        correct : "A"
      },

      {
        question : "How much is 50% of 80?",
        choiceA : "40",
        choiceB : "25",
        choiceC : "50",
        correct : "A"
      },

      {
        question : "What is deprication?",
        choiceA : "A reduction in the price of a product over time",
        choiceB : "A product being used or consumed",
        choiceC : "To drop the price of a product",
        correct : "A"
      },

      {
        question : "If a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?",
        choiceA : "$25,000",
        choiceB : "$36,000",
        choiceC : "$12,500",
        correct : "A"
      },

      {
      question : "If a car is worth $50,000, and the car depricates the same amount, 5% each year, how much will the car be worth after Year 2?",
      choiceA : "$40,000",
      choiceB : "$25,000",
      choiceC : "$45,000",
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?",
      choiceA : "$850",
      choiceB : "$100",
      choiceC : "$800",
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes?",
      choiceA : "$150",
      choiceB : "$850",
      choiceC : "$1000",
      correct : "A"
    },

    {
      question : "If the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?",
      choiceA : "$5,000",
      choiceB : "$5,750",
      choiceC : "$40,000",
      correct : "A"
    },

    {
      question : "If the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?",
      choiceA : "$45,000",
      choiceB : "$20,000",
      choiceC : "$15,000",
      correct : "A"
    },
  ]
      function display() {
        var displayAnswers[];
        var correctAnswer;

          for (var i=0; i<questions.length; i++) {
            if (i = 0) {
            /*  var questions1 = [
                    {
                      question : "What company has the stock symbol, AAPL?",
                      imgSrc  : // "put image here"
                      choiceA : "Apple",
                      choiceB : "Amazon",
                      choiceC : "Microsoft",
                      correct : "A"                 //We must make choice A the correct answer
                    };                              // do you think this will work/be easier if we make an if and just print them based on the for statement?
              */
            }
          }
      }

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


function progressRender(){
      for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
          progress.innerHTML += "<div class='prog'id=" + qIndex + "></div>";
      }
}
function answerCorrect(){
    document.getelementById(runningQuestionIndex).style.backgroundcolor = "green";
}
function answerWrong(){
    document.getelementById(runningQuestionIndex).style.backgroundcolor = "red";
}

const questionTime = 10;  //10 seconds for every question
const gaugeWidth = 150;
let count  =  0;
const gaugeProgressUnit =gaugeWidth/questionTime;

function counterRender(){
  if( count <=questionTime ){
      counter.innerHTML = count;
      timeGauge.style.width = gaugeProgressUnit * count + "px" ;
      count++;
    }else{
        count = 0;
        answerisWrong();
        if( runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
          }
        }

            //Not done with this function

    }

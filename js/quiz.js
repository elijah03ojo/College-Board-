/* Features in quiz
1. Time = Reload page after 5 minutes
2. Multiple choice 3 options, after submit, tells you how many right/wrong
*/
const scoreContainer = document.getElementById('quiz');
const results = document.getElementById('results');
const submitButton = document.getElementById('classicButton');
const quiz1 = document.getElementById("quiz");
const counter = document.getElementById("counter");
const timeGage = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scorecontainer = document.getElementById("scoreContainer");
let displayAnswers = [];

let questions = [
      {
        question : "What is FICA tax?",
        responses: {
        choiceA : "Social Security and Medicare",
        choiceB : "Federal Income Tax",
        choiceC : "Federal Income Charge Associaton Tax",
      },
        correct : "A"
      },

      {
        question : "What taxes do you pay after gross income?",
        responses: {
        choiceA : "Citizen Tax",
        choiceB : "Gas Tax",
        choiceC : "FICA",
      },
        correct : "C"
      },

      {
        question : "How much is the FICA tax?",
        responses: {
        choiceA : "9.58%",
        choiceB : "7.65%",
        choiceC : "6.2%",
      },
        correct : "B"
      },

      {
        question : "What is economics?",
        responses: {
        choiceA : "The study of decisions that go into making, distributing, and using goods and services",
        choiceB : "The study of economics",
        choiceC : "The study of the world's economies",
      },
        correct : "A"
      },

      {
        question : "How much is 50% of 80?",
        responses: {
        choiceA : "40",
        choiceB : "25",
        choiceC : "50",
      },
        correct : "A"
      },

      {
        question : "What is deprication?",
        responses: {
        choiceA : "A reduction in the price of a product over time",
        choiceB : "A product being used or consumed",
        choiceC : "To drop the price of a product",
      },
        correct : "A"
      },

      {
        question : "If a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?",
        responses: {
        choiceA : "$25,000",
        choiceB : "$36,000",
        choiceC : "$12,500",
      },
        correct : "A"
      },

      {
      question : "If a car is worth $50,000, and the car depricates the same amount, 5% each year, how much will the car be worth after Year 2?",
      responses: {
      choiceA : "$40,000",
      choiceB : "$25,000",
      choiceC : "$45,000",
    },
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?",
      responses: {
      choiceA : "$850",
      choiceB : "$100",
      choiceC : "$800",
    },
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes?",
      responses: {
      choiceA : "$150",
      choiceB : "$850",
      choiceC : "$1000",
    },
      correct : "A"
    },

    {
      question : "If the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?",
      responses: {
      choiceA : "$5,000",
      choiceB : "$5,750",
      choiceC : "$40,000",
    },
      correct : "A"
    },

    {
      question : "If the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?",
      responses: {
      choiceA : "$45,000",
      choiceB : "$20,000",
      choiceC : "$15,000",
    },
      correct : "A"
    },
  ];

quiz(questions, scoreContainer, results, submitButton);

function quiz(question, scoreContainer, results, submitButton) {

  function display(question, scoreContainer) {
      var grade = [];
      var responses;

      for (var i=0; i<question.length; i++) {
        responses = [];

// this portion of code was taken from https://simplestepscode.com/javascript-quiz-tutorial/ <-- cited in paper
        for(letter in questions[i].responses){
              responses.push(
                  '<label>'
                      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                      + letter + ': '
                      + questions[i].responses[letter]
                  + '</label>'
              );
          }
          grade.push(
              '<div class="question">' + questions[i].question + '</div>'
              + '<div class="answers">' + responses.join('') + '</div>'
          );
      }
      if (scoreContainer.innerHTML = null) {
        // on purpose
      }
      scoreContainer.innerHTML = grade.join('');
      }

          function showsAnswers(questions, scoreContainer, results){
              var answerContainers = quizContainer.querySelectorAll('.answers');
              var userInput = '';
              var right = 0;
              for(var i=0; i<questions.length; i++){
                  userInput = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                  if(userInput===questions[i].correctAnswer){
                      right++;
                      answerContainers[i].style.color = 'lightgreen';
                  }
                  else{
                      answerContainers[i].style.color = 'red';
                  }
              }
              resultsContainer.innerHTML = right + ' out of ' + questions.length;
          }
          display(questions, scoreContainer);

          submitButton.onclick = function(){
              showResults(questions, scoreContainer, results);
          }

  }
  // up to here

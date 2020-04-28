/* Features in quiz
1. Timing = points
2. Multiple choice 4 options points if right no points if wrong
3. Scoreboard
4. 25 questions but only 10 appear?
*/

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = function() {
let var4 = document.getElementById("question");
console.log(questions[0, 1, 3, 5 ,6]);
}

const counter = document.getElementById("counter");

const timeGage = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
      {
        question : "What company has the stock symbol, AAPL?",
        imgSrc  : // "put image here"                    //This line of code is for images related to the questions we have//
        choiceA : "Apple",
        choiceB : "Amazon",
        choiceC : "Microsoft",
        correct : "A"                 //We must make choice A the correct answer <--  why?????????? //
      },

      {
        question : "What taxes do you pay after gross income?",
        imgSrc  : // "put image here"
        choiceA : "FICA",
        choiceB : "Gas Tax",
        choiceC : "Citizen Tax",
        correct : "A"
      },

      {
        question : "What is FICA tax?",
        imgSrc  : // "put image here"
        choiceA : "Social Security and Medicare",
        choiceB : "Federal Income Tax",
        choiceC : "Federal Income Charge Associaton Tax",
        correct : "A"
      },

      {
        question : "How much is the FICA tax?",
        imgSrc  : // "put image here"
        choiceA : "7.65%",
        choiceB : "9.58%",
        choiceC : "6.2%",
        correct : "A"
      },

      {
        question : "What is FICA tax?",
        imgSrc  : // "put image here"
        choiceA : "Social Security and Medicare",
        choiceB : "Federal Income Tax",
        choiceC : "Federal Income Charge Associaton Tax",
        correct : "A"
      },

      {
        question : "What is economics?",
        imgSrc  : // "put image here"
        choiceA : "The study of decisions that go into making, distributing, and using goods and services",
        choiceB : "The study of economics",
        choiceC : "The study of the world's economies",
        correct : "A"
      },

      {
        question : "What is FICA tax?",
        imgSrc  : // "put image here"
        choiceA : "Social Security and Medicare",
        choiceB : "Federal Income Tax",
        choiceC : "Federal Income Charge Associaton Tax",
        correct : "A"
      },

      {
        question : "What is elastic demand?",
        imgSrc  : // "put image here"
        choiceA : "When demand for a product is affected by price.",
        choiceB : "Demand for rubber bands",
        choiceC : "Demands that is not effected by price",
        correct : "A"
      },

      {
        question : "What is price ceiling?",
        imgSrc  : // "put image here"
        choiceA : "A maximium price set by the government that can be charged for goods",
        choiceB : "The highest price possible for products",
        choiceC : "Raising the price for products till demand decreases",
        correct : "A"
      },

      {
        question : "How much is 50% of 80?",
        imgSrc  : // "put image here"
        choiceA : "40",
        choiceB : "25",
        choiceC : "50",
        correct : "A"
      },

      {
        question : "What is deprication?",
        imgSrc  : // "put image here"
        choiceA : "A reduction in the price of a product over time",
        choiceB : "A product being used or consumed",
        choiceC : "To drop the price of a product",
        correct : "A"
      },

      {
        question : "If a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?",
        imgSrc  : // "put image here"
        choiceA : "$25,000",
        choiceB : "$36,000"
        choiceC : "$12,500",
        correct : "A"
      },

      {
        question : "If a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 2?",
        imgSrc  : // "put image here"
        choiceA : "$25,000",
        choiceB : "$0"
        choiceC : "$12,500",
        correct : "A"
      },

 {
      question : "If a car is worth $50,000, and the car depricates the same amount, 5% each year, how much will the car be worth after Year 2?",
      imgSrc  : // "put image here"
      choiceA : "$40,000",
      choiceB : "$25,000"
      choiceC : "$45,000",
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?",
      imgSrc  : // "put image here"
      choiceA : "$850",
      choiceB : "$100"
      choiceC : "$800",
      correct : "A"
    },

    {
      question : "If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes?",
      imgSrc  : // "put image here"
      choiceA : "$150",
      choiceB : "$850"
      choiceC : "$1000",
      correct : "A"
    },

    {
      question : "If the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?",
      imgSrc  : // "put image here"
      choiceA : "$5,000",
      choiceB : "$5,750"
      choiceC : "$40,000",
      correct : "A"
    },

      {
        question : "If the assets for a company are $15,000, and the owner's equity are $10,000, how much is the liabilities?",
        imgSrc  : // "put image here"
        choiceA : "$5,000",
        choiceB : "$20,000"
        choiceC : "$35,000",
        correct : "A"
      },

        {
          question : "If the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?",
          imgSrc  : // "put image here"
          choiceA : "$45,000",
          choiceB : "$20,000"
          choiceC : "$15,000",
          correct : "A"
        },
// can add more later, lets finish the js and get the quiz running
  ]

/* New Features?
1. Better Point System
2. Tells you which are wrong
3. Highest Point Function?
*/

const readlineSync = require("readline-sync");

let name = (readlineSync.question("\nWhat is your name? "));
let theirName = console.log("\nHi " + name + "!" )
let firstResponse = (readlineSync.question("\nWould you like to take our business quiz? "));
firstResponse = firstResponse.toLowerCase();
while (firstResponse == "yes") {
  var points = 0
  var score = 0
  console.log("\nGreat! Let's begin!");

function Q1() {
  console.log("\nWhat is FICA tax?\n" );
  console.log("A: Social Security and Medicare")
  console.log("B: Federal Income Tax")
  console.log("C: Federal Income Charge Association Tax")

}
Q1()
var firstAnswer = (readlineSync.question("Answer: "));
firstAnswer = firstAnswer.toLowerCase();

if (firstAnswer == "a" || "b" || "c") {
  if (firstAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (firstAnswer) {
    console.log("Please enter a valid response.")
    Q1()
}

function Q2() {
  console.log("\nWhat taxes do you pay after gross income?\n" );
  console.log("A: Citizen Tax")
  console.log("B: FICA")
  console.log("C: Gas Tax")
}
Q2()
var secondAnswer = (readlineSync.question("Answer: "));
secondAnswer = secondAnswer.toLowerCase();

if (secondAnswer == "a" || "b" || "c") {
  if (secondAnswer == "b") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (secondAnswer) {
    console.log("Please enter a valid response.")
    Q2()
}

function Q3() {
  console.log("\nHow much is the FICA tax?\n" );
  console.log("A: 9.58%")
  console.log("B: 7.65%")
  console.log("C: 6.2%")
}
Q3()
var thirdAnswer = (readlineSync.question("Answer: "));
thirdAnswer = thirdAnswer.toLowerCase();

if (thirdAnswer == "a" || "b" || "c") {
  if (thirdAnswer == "b") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (thirdAnswer) {
    console.log("Please enter a valid response.")
    Q3()
}


function Q4() {
  console.log("\nWhat is economics?\n" );
  console.log("A: The study of decisions that go into making, distributing, and using goods and services.")
  console.log("B: The study of the world's economies.")
  console.log("C: The study of economics.")
}
Q4()
var fourthAnswer = (readlineSync.question("Answer: "));
fourthAnswer = fourthAnswer.toLowerCase();

if (fourthAnswer == "a" || "b" || "c") {
  if (fourthAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (fourthAnswer) {
    console.log("Please enter a valid response.")
    Q4()
}

function Q5() {
  console.log("\nWhat is 50% of 80?\n" );
  console.log("A: 25")
  console.log("B: 50")
  console.log("C: 40")
}
Q5()
var fifthAnswer = (readlineSync.question("Answer: "));
fifthAnswer = fifthAnswer.toLowerCase();

if (fifthAnswer == "a" || "b" || "c") {
  if (fifthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (fifthAnswer) {
    console.log("Please enter a valid response.")
    Q5()
}


function Q6() {
  console.log("\nWhat is deprication?\n" );
  console.log("A: A product being used or consumed.")
  console.log("B: To drop the prices of a product.")
  console.log("C: A reduction in the price of a product over time.")
}
Q6()
var sixthAnswer = (readlineSync.question("Answer: "));
sixthAnswer = sixthAnswer.toLowerCase();

if (sixthAnswer == "a" || "b" || "c") {
  if (sixthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (sixthAnswer) {
    console.log("Please enter a valid response.")
    Q6()
}

function Q7() {
  console.log("\nIf a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?\n" );
  console.log("A: $25,000")
  console.log("B: $36,000")
  console.log("C: $12,500")
}
Q7()
var seventhAnswer = (readlineSync.question("Answer: "));
seventhAnswer = seventhAnswer.toLowerCase();

if (seventhAnswer == "a" || "b" || "c") {
  if (seventhAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (seventhAnswer) {
    console.log("Please enter a valid response.")
    Q7()
}

function Q8() {
  console.log("\nIf a car is worth $50,000, and it depreciates 5% each year, how much will the car be worth after Year 2?\n" );
  console.log("A: $45,125")
  console.log("B: $47,625")
  console.log("C: $45,000")
}
Q8()
var eightAnswer = (readlineSync.question("Answer: "));
eightAnswer = eightAnswer.toLowerCase();

if (eightAnswer == "a" || "b" || "c") {
  if (eightAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (eightAnswer) {
    console.log("Please enter a valid response.")
    Q8()
}


function Q9() {
  console.log("\nIf the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?\n" );
  console.log("A: $850")
  console.log("B: $100")
  console.log("C: $800")
}
Q9()
var ninthAnswer = (readlineSync.question("Answer: "));
ninthAnswer = ninthAnswer.toLowerCase();

if (ninthAnswer == "a" || "b" || "c") {
  if (ninthAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (ninthAnswer) {
    console.log("Please enter a valid response.")
    Q9()
}

function Q10() {
  console.log("\nIf the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?\n" );
  console.log("A: $45,000")
  console.log("B: $5,750")
  console.log("C: $5,000")
}
Q10()
var tenthAnswer = (readlineSync.question("Answer: "));
tenthAnswer = tenthAnswer.toLowerCase();

if (tenthAnswer == "a" || "b" || "c") {
  if (tenthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (tenthAnswer) {
    console.log("Please enter a valid response.")
    Q10()
}

// Part 2

console.log("\nPart 2: Written Response\n")

function Q11() {
  let eleventhAnswer = console.log("\nIf the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?: ");
}
Q11()
var eleventhAnswer = (readlineSync.question("Answer: "));
eleventhAnswer = eleventhAnswer.toLowerCase();

if (eleventhAnswer == "$15,000" || "45 thousand dollars" || "45,000" || "45 thousand" || "fourty five thousand dollars" || "fourty-five thousand dollars" ||  "$5,000" || "5,000" || "five thousand dollars") {
  if (eleventhAnswer ==  "$5,000" || "five thousand dollars" ) {
    score++
    points += 1
  } else {
    points -= 1
  }
} else if (eleventhAnswer) {
    console.log("Please enter a valid response.")
    Q11()
}

function Q12() {
  let twelvethAnswer = console.log("\nIf the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes? ");
}
Q12()
var twelvethAnswer = (readlineSync.question("Answer: "));
twelvethAnswer = twelvethAnswer.toLowerCase();

if (twelvethAnswer ==  "$150" || "one hundred fifty dollars" || "150 dollars" || "150" || "one hundred fifty" || "$850" || "850" || "eight hundred fifty" || "eight hundred fifty dollars" ) {
  if (twelvethAnswer == "$150" || "one hundred fifty dollars" || "150 dollars") {
    score++;
    points += 1;
  } else {
    points -= 1;
  }
} else if (twelvethAnswer) {
    console.log("Please enter a valid response.");
    Q12();
}

let accuracy = (score/14)*100

console.log("\nYou have completed the quiz.")
console.log("\nYou have earned a score of " + points + " out of 14 possible points.")
console.log("\nYou got " + score + " out of 14 questions right for an accuracy of " + accuracy + "%.")

firstResponse = (readlineSync.question("\nWould you like to retake our business quiz? "));
}

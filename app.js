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
  firstResponse = firstResponse.toLowerCase();
  var points = 0
  var score = 0
  console.log("\nGreat! Let's begin!");

  function Q1() {
    console.log("\n1. What is FICA tax?\n" );
    console.log("A: Social Security and Medicare")
    console.log("B: Federal Income Tax")
    console.log("C: Federal Income Charge Association Tax")
    firstAnswer = (readlineSync.question("Answer: "));
    firstAnswer = firstAnswer.toLowerCase();
  }
  Q1()

  if ((firstAnswer == "a") || (firstAnswer == "b") || (firstAnswer == "c")) {
    if (firstAnswer == "a") {
      score++
      points += 1
    } else {
      points -= 1
    }
  } else{
      console.log("\nPlease enter a valid response.")
      Q1()
  }

function Q2() {
  console.log("\n2. What taxes do you pay after gross income?\n" );
  console.log("A: Citizen Tax")
  console.log("B: FICA")
  console.log("C: Gas Tax")
  secondAnswer = (readlineSync.question("Answer: "));
  secondAnswer = secondAnswer.toLowerCase();
}
Q2()


if ((secondAnswer == "a") || (secondAnswer == "b") || (secondAnswer == "c")) {
  if (secondAnswer == "b") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q2()
}

function Q3() {
  console.log("\n3. How much is the FICA tax?\n" );
  console.log("A: 9.58%")
  console.log("B: 7.65%")
  console.log("C: 6.2%")
  thirdAnswer = (readlineSync.question("Answer: "));
  thirdAnswer = thirdAnswer.toLowerCase();
}
Q3()

if ((thirdAnswer == "a") || (thirdAnswer == "b") || (thirdAnswer == "c")) {
  if (thirdAnswer == "b") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q3()
}


function Q4() {
  console.log("\n4. What is economics?\n" );
  console.log("A: The study of decisions that go into making, distributing, and using goods and services.")
  console.log("B: The study of the world's economies.")
  console.log("C: The study of economics.")
  fourthAnswer = (readlineSync.question("Answer: "));
  fourthAnswer = fourthAnswer.toLowerCase();
}
Q4()

if ((fourthAnswer == "a") || (fourthAnswer == "b") || (fourthAnswer == "c")) {
  if (fourthAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q4()
}

function Q5() {
  console.log("\n5. What is 50% of 80?\n" );
  console.log("A: 25")
  console.log("B: 50")
  console.log("C: 40")
  fifthAnswer = (readlineSync.question("Answer: "));
  fifthAnswer = fifthAnswer.toLowerCase();
}
Q5()


if ((fifthAnswer == "a") || (fifthAnswer == "b") || (fifthAnswer == "c")) {
  if (fifthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q5()
}


function Q6() {
  console.log("\n6. What is deprication?\n" );
  console.log("A: A product being used or consumed.")
  console.log("B: To drop the prices of a product.")
  console.log("C: A reduction in the price of a product over time.")
  sixthAnswer = (readlineSync.question("Answer: "));
  sixthAnswer = sixthAnswer.toLowerCase();
}
Q6()


if ((sixthAnswer == "a") || (sixthAnswer == "b") || (sixthAnswer == "c")) {
  if (sixthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q6()
}

function Q7() {
  console.log("\n7. If a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?\n" );
  console.log("A: $25,000")
  console.log("B: $36,000")
  console.log("C: $12,500")
  seventhAnswer = (readlineSync.question("Answer: "));
  seventhAnswer = seventhAnswer.toLowerCase();
}
Q7()


if ((seventhAnswer == "a") || (seventhAnswer == "b") || (seventhAnswer == "c")) {
  if (seventhAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q7()
}

function Q8() {
  console.log("\n8. If a car is worth $50,000, and it depreciates 5% each year, how much will the car be worth after Year 2?\n" );
  console.log("A: $45,125")
  console.log("B: $47,625")
  console.log("C: $45,000")
  eightAnswer = (readlineSync.question("Answer: "));
  eightAnswer = eightAnswer.toLowerCase();
}
Q8()


if ((eightAnswer == "a") || (eightAnswer == "b") || (eightAnswer == "c")) {
  if (eightAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q8()
}

function Q9() {
  console.log("\n9. If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?\n" );
  console.log("A: $850")
  console.log("B: $100")
  console.log("C: $800")
  ninthAnswer = (readlineSync.question("Answer: "));
  ninthAnswer = ninthAnswer.toLowerCase();
}
Q9()


if ((ninthAnswer == "a") || (ninthAnswer == "b") || (ninthAnswer == "c")) {
  if (ninthAnswer == "a") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q9()
}

function Q10() {
  console.log("\n10. If the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?\n" );
  console.log("A: $45,000")
  console.log("B: $5,750")
  console.log("C: $5,000")
  tenthAnswer = (readlineSync.question("Answer: "));
  tenthAnswer = tenthAnswer.toLowerCase();
}
Q10()

if ((tenthAnswer == "a") || (tenthAnswer == "b") || (tenthAnswer == "c")) {
  if (tenthAnswer == "c") {
    score++
    points += 1
  } else {
    points -= 1
  }
} else {
    console.log("\nPlease enter a valid response.")
    Q10()
}

// Part 2

console.log("\nPart 2: Written Response\n")

function Q11() {
  let eleventhAnswer = console.log("\n11. If the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?: ");
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
  let twelvethAnswer = console.log("\n12. If the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes? ");
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

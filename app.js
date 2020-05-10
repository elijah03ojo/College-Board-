const readlineSync = require("readline-sync");
let points = 0
let score = 0

let name = (readlineSync.question("\nWhat is your name? "));
let theirName = console.log("\nHi " + name + "!" )
let firstResponse = (readlineSync.question("\nWould you like to take our business quiz? "));

firstResponse = firstResponse.toLowerCase();
while (firstResponse == "yes") {
  console.log("\nGreat! Let's begin!");

  console.log("\nWhat is FICA tax?\n" );
  console.log("A: Social Security and Medicare")
  console.log("B: Federal Income Tax")
  console.log("C: Federal Income Charge Association Tax")
  let firstAnswer = (readlineSync.question("Answer: "));
  firstAnswer = firstAnswer.toUpperCase
  if (firstAnswer == "A") {
    score++
    points += 2
  }
  else if (firstAnswer == "B") {
    points += 0
  }
  else if (firstAnswer == "C") {
    points -= 2
  }
  else {
    points += 0
  }

  console.log("\nWhat taxes do you pay after gross income?\n" );
  console.log("A: Citizen Tax")
  console.log("B: FICA")
  console.log("C: Gas Tax")
  let secondAnswer = (readlineSync.question("Answer: "));
  secondAnswer = secondAnswer.toUpperCase
  if (secondAnswer == "A") {
    points -= 2
  }
  else if (secondAnswer == "B") {
    points += 2
    score++
  }
  else if (secondAnswer == "C") {
    points -= 0
  }
  else {
    points += 0
  }

  console.log("\nHow much is the FICA tax?\n" );
  console.log("A: 9.58%")
  console.log("B: 7.65%")
  console.log("C: 6.2%")
  let thirdAnswer = (readlineSync.question("Answer: "));
  thirdAnswer = thirdAnswer.toUpperCase
  if (thirdAnswer == "A") {
    points -= 2
  }
  else if (secondAnswer == "B") {
    points += 0
  }
  else if (secondAnswer == "C") {
    points += 0
    score ++
  }
  else {
    points += 0
  }

  console.log("\nWhat is economics?\n" );
  console.log("A: The study of decisions that go into making, distributing, and using goods and services.")
  console.log("B: The study of the world's economies.")
  console.log("C: The study of economics.")
  let fourthAnswer = (readlineSync.question("Answer: "));
  fourthAnswer = fourthAnswer.toUpperCase
  if (fourthAnswer == "A") {
    points += 2
    score++
  }
  else if (fourthAnswer == "B") {
    points += 0
  }
  else if (fourthAnswer == "C") {
    points -= 0
  }
  else {
    points += 0
  }

  console.log("\nWhat is 50% of 80?\n" );
  console.log("A: 25%")
  console.log("B: 50%")
  console.log("C: 40%")
  let fifthAnswer = (readlineSync.question("Answer: "));
  fifthAnswer = secondAnswer.toUpperCase
  if (fifthAnswer == "A") {
    points -= 2
  }
  else if (fifthAnswer == "B") {
    points -= 2
  }
  else if (fifthAnswer == "C") {
    points += 0
    score++
  }
  else {
    points += 0
  }

  console.log("\nWhat is deprication?\n" );
  console.log("A: A product being used or consumed.")
  console.log("B: To drop the prices of a product.")
  console.log("C: A reduction in the price of a product over time.")
  let sixthAnswer = (readlineSync.question("Answer: "));
  sixthAnswer = secondAnswer.toUpperCase
  if (sixthAnswer == "A") {
    points -= 2
  }
  else if (sixthAnswer == "B") {
    points -= 2
  }
  else if (sixthAnswer == "C") {
    points += 2
    score++
  }
  else {
    points += 0
  }

  console.log("\nIf a car is worth $50,000, and the car depricates 50% each year, how much will the car be worth after Year 1?\n" );
  console.log("A: $25,000")
  console.log("B: $36,000")
  console.log("C: $12,500")
  let seventhAnswer = (readlineSync.question("Answer: "));
  seventhAnswer = secondAnswer.toUpperCase
  if (seventhAnswer == "A") {
    points += 2
    score++
  }
  else if (seventhAnswer == "B") {
    points -= 2
  }
  else if (seventhAnswer == "C") {
    points += 0
  }
  else {
    points += 0
  }

  console.log("\nIf a car is worth $50,000, and the car depricates the same amount, 5% each year, how much will the car be worth after Year 2?\n" );
  console.log("A: $25,000")
  console.log("B: $40,000")
  console.log("C: $45,000")
  let eigthAnswer = (readlineSync.question("Answer: "));
  eigthAnswer = secondAnswer.toUpperCase
  if (eigthAnswer == "A") {
    points -= 2
  }
  else if (eigthAnswer == "B") {
    points += 2
    score++
  }
  else if (eigthAnswer == "C") {
    points -= 2
  }
  else {
    points += 0
  }

  console.log("\nIf the total tax on a paycheck is 15%, and the person's gross pay is $1,000, what is the person's take-home pay?\n" );
  console.log("A: $850")
  console.log("B: $100")
  console.log("C: $800")
  let ninthAnswer = (readlineSync.question("Answer: "));
  ninthAnswer = secondAnswer.toUpperCase
  if (ninthAnswer == "A") {
    points += 2
    score++
  }
  else if (ninthAnswer == "B") {
    points -= 2
  }
  else if (ninthAnswer == "C") {
    points -= 2
  }
  else {
      points += 0
    }

  console.log("\nIf the assets for a company are $25,000, and the liabilities are $20,000, how much is owner's equity?\n" );
  console.log("A: $45,000")
  console.log("B: $5,750")
  console.log("C: $5,000")
  let tenthAnswer = (readlineSync.question("Answer: "));
  tenthAnswer = tenthAnswer.toUpperCase
  if (tenthAnswer == "A") {
    points -= 2
  }
  else if (tenthAnswer == "B") {
    points -= 2
  }
  else if (tenthAnswer == "C") {
    points += 0
    score++
  }
  else {
    points += 0
  }

console.log("\nThank you for taking the quiz.")
console.log("\nYou have earned " + points + " out of 20 possible points.")
let percentage = (score/10)*100
console.log("\nYou got " + score + " questions correct out of 10, a " + percentage + "% accuracy." )

firstResponse = (readlineSync.question("\nWould you like to retake our business quiz? "));

}



// Part 2


console.log("Part 2: Written Response\n")

let firstWrittenAnswer = (readlineSync.question("\nIf the liabilities for a company are $25,000, and the owner's equity is $20,000, how much is the companies assets?: "));
if (firstWrittenAnswer == "$45,000" || "45 thousand dollars") {
  points += 10
  score += 2
}
else if (firstWrittenAnswer == "45,000" || "45 thousand" || "fourty five thousand dollars" || "fourty-five thousand dollars") {
  points += 5
  score += 1
}
else if (firstWrittenAnswer == "$5,000" || "5,000" || "five thousand dollars") {
  points += 2
}
else {
  points -= 10
}

let secondWrittenAnswer = (readlineSync.question("\nIf the total tax on a paycheck is 15%, and the person's gross pay is $1,000, how much is the person paying in taxes? "));
if (secondWrittenAnswer == "$150" || "one hundred fifty dollars" || "150 dollars") {
  points += 10
  score += 2
}

else if (secondWrittenAnswer == "150" || "one hundred fifty") {
  points += 5
  score += 1
}

else if (secondWrittenAnswer == "$850" || "850" || "eight hundred fifty" || "eight hundred fifty dollars") {
  points += 2
}
else {
  points -= 10
}

let accuracy = (score/14)*100

console.log("\nYou have completed Part 2.")
console.log("\nYou have earned " + points + " out of 40 possible points.")
console.log("\nYou got " + score + " out of 14 points for an accuracy of " + accuracy + "%.")

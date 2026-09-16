//Function To Dos
// ============================================================
// AP CSP – JavaScript Practice Problem 02: Functions
// ============================================================
//
// DIRECTIONS: Complete each TODO below. Run with:
//             node practice_02_functions.js
// ============================================================

// ----------------------------------------------------------
// PART A: Writing Your First Function
// ----------------------------------------------------------

// TODO 1: Define a function called `greetStudent` that takes
//         one PARAMETER: `name`
//         The function should print:  "Hello, <name>! Welcome to AP CSP."
/* function greetStudent(name) {
    return `Hello, ${name}! Welcome to AP CSP.`;
}
// TODO 2: CALL your greetStudent function twice with two
//         different names and observe the output.
console.log(greetStudent("jimmithan"));
console.log(greetStudent("ethaniel"));  */ 
// ----------------------------------------------------------
// PART B: Functions That Return Values
// ----------------------------------------------------------

// TODO 3: Define a function called `addNumbers` that takes
//         TWO parameters: `a` and `b`
//         It should RETURN their sum (do NOT just print it).
/* function addNumbers(x,y) {
    return x + y;
}
// TODO 4: Store the RETURN VALUE of addNumbers(15, 27) in a
//         variable called `result`, then print `result`.
const result = addNumbers(15, 27);
console.log(result); */
// TODO 5: Define a function called `isEven` that takes one
//         parameter `num` and RETURNS true if it's even,
//         false if it's odd.  (Hint: use the % operator)
/* function isEven(x) {
    if (x % 2 === 0) {
      return `${x} is even`;
    } else {
       return `${x} is odd`;
    }
}
// TODO 6: Test isEven with three different numbers and print
//         each result with a label.
//         Example output:  4 is even: true
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(-9)); */
// ----------------------------------------------------------
// PART C: Putting It Together
// ----------------------------------------------------------

// TODO 7: Define a function called `letterGrade` that:
//         - Takes one parameter: `score` (a number 0–100)
//         - RETURNS the letter grade as a string:
//             90–100  → "A"
//             80–89   → "B"
//             70–79   → "C"
//             60–69   → "D"
//             below 60 → "F"
/* function letterGrade(score) {
    if (score >= 90 && score <= 100) {
        return `Score ${score} -> A`;
    } else if (score >= 80 && score <= 89) {
        return `Score ${score} -> B`;
    } else if (score >= 70 && score <= 79) {
        return `Score ${score} -> C`;
    } else if (score >= 60 && score <= 69) {
        return `Score ${score} -> D`;
    } else if (score < 60) {
        return `Score ${score} -> F`;
    }
}
// TODO 8: Call letterGrade() with at least FOUR different
//         scores and print each result.
//         Example output:  Score 85 → B
console.log(letterGrade(95));
console.log(letterGrade(85));
console.log(letterGrade(75));
console.log(letterGrade(65));
console.log(letterGrade(55)); */
// ----------------------------------------------------------
// PART D: Scope Challenge
// ----------------------------------------------------------

// TODO 9: Predict what this code will print BEFORE running it.
//         Write your prediction as a comment, THEN run it.

/* let message = "I am global";

function scopeTest() {
  let message = "I am local";
  console.log("Inside function:", message);
}

scopeTest();
console.log("Outside function:", message);
 */
// MY PREDICTION:
//   Inside function: I am local
//   Outside function: I am global
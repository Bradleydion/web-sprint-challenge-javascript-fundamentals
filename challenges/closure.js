// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
// Functions are like one way streets, they can pull informtaion that is defined from objects out side of them selves, but you cannot pull information from objects that are defined by the function from out side of the function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
// function summation(number) {
//   let count = number;
//   return function () {
//     count = count + 1;
//     return count;
//   };
// }

// console.log(summation(4));
function summation(number){
  let count = 0
  for(let i = 0; i <= number; i++){
  count += i
  }
  return count 
}
console.log (summation(4))
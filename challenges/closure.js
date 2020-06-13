// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

/*
Explanation: `nestedFunction` can access the `internal` variable because it is within the function's closure, in its outer lexical environment, and is referenced through a hidden property on its function's prototype, which "remembers" the variables that the function can access at function creation time.
*/

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

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// Iterative Solution
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Recursive Solution
function summation(n) {
  let count = 1;
  const add = (total = 0) => {
    if (count === n) return total + n;
    return add(total + count++);
  };

  return add();
}

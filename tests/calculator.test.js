const { add, subtract, multiply, divide } = require("../src/calculator");

// add
console.assert(add(2, 3) === 5, "add(2, 3) should be 5");
console.assert(add(-1, 1) === 0, "add(-1, 1) should be 0");
console.assert(add(0, 0) === 0, "add(0, 0) should be 0");

// subtract
console.assert(subtract(5, 3) === 2, "subtract(5, 3) should be 2");
console.assert(subtract(0, 5) === -5, "subtract(0, 5) should be -5");

// multiply
console.assert(multiply(3, 4) === 12, "multiply(3, 4) should be 12");
console.assert(multiply(0, 100) === 0, "multiply(0, 100) should be 0");
console.assert(multiply(-2, 3) === -6, "multiply(-2, 3) should be -6");

// divide
console.assert(divide(10, 2) === 5, "divide(10, 2) should be 5");
console.assert(divide(7, 2) === 3.5, "divide(7, 2) should be 3.5");

// divide by zero
try {
  divide(1, 0);
  console.assert(false, "divide(1, 0) should throw");
} catch (e) {
  console.assert(e.message === "Cannot divide by zero", "should throw correct message");
}

console.log("All tests passed.");

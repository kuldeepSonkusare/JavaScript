// 1. Differences between for, for...in, for...of, forEach, and map in JavaScript, along with examples.

//for loop:

// General-purpose loop that iterates over a block of code a specified number of times.
// Best used when you know the exact number of iterations.
// example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...in loop:

// Iterates over the properties of an object (enumerable properties).
// Not recommended for iterating over arrays due to potential issues with the order of iteration and inclusion of non-numeric properties.

// example:
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);
}


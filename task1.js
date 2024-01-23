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

for...of loop:

// Introduced in ES6, it iterates over iterable objects (arrays, strings, maps, sets, etc.).
// Provides a simpler syntax compared to traditional for loops.

// example:
const arr = [1, 2, 3];

for (const element of arr) {
  console.log(element);
}


// forEach method:

// Applies a provided function once for each element in an array.
// It's a method of the Array object.

// example:
const arr = [1, 2, 3];

arr.forEach(function (element) {
  console.log(element);
});


// map method:

// Creates a new array by applying a provided function to every element in the calling array.
// Returns a new array with the results.

// example:
const arr = [1, 2, 3];

const mappedArray = arr.map(function (element) {
  return element * 2;
});

console.log(mappedArray);

In summary:

// Use for when you know the exact number of iterations.
// Use for...in when iterating over object properties.
// Use for...of when iterating over iterable objects.
// Use forEach when you want to perform an operation on each element of an array.
// Use map when you want to create a new array based on the original array's elements.

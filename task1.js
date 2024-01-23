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


// 2. Diif btw ES5 (ECMAScript 5) and ES6 (ECMAScript 2015, also known as ES2015)
// ES5 (ECMAScript 5) and ES6 (ECMAScript 2015, also known as ES2015) are different versions of the ECMAScript standard, which is the specification that JavaScript is based on. ES6 introduced several new features and improvements over ES5. Here are some key differences:


// 2 .What is a prototype in JavaScript?
// Prototype in JavaScript
// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default.


// 3. What are call ,bind, apply
// call, bind, and apply are methods in JavaScript that are used to manipulate the this context of a function and, in the case of call and apply, to invoke a function with a specific this value. Here's a brief explanation of each:

// call and apply are used to invoke a function immediately with a specified this value and arguments.
  
// bind is used to create a new function with a specified this value and initial arguments but does not invoke the function immediately. The returned function can be invoked later.
  
// These methods are commonly used in scenarios where you need to control the execution context of a function or partially apply arguments to a function.

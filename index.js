////Part 1: Thinking Functionally

//Take an array of numbers and return the sum.
const sum = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return 0;
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

console.log(sum([1, 2, 3, 4, 5]));

//Take an array of numbers and return the average.
const avg = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return 0;
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum / arr.length;
};

console.log(avg([1, 2, 3, 4, 5]));

//Take an array of strings and return the longest string.
const longestString = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return "";
  let output = "";
  arr.forEach((item) => {
    if (typeof item === "string" && item.length > output.length) {
      output = item;
    }
  });
  return output;
};

console.log(longestString(["One", "Two", "Three", "Four", "Five"]));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
const stringsLongerThan = (arr, number) => {
  if (!Array.isArray(arr) || !arr.length) return [];
  const output = [];
  arr.forEach((item) => {
    if (typeof item === "string" && item.length > number) {
      output.push(item);
    }
  });
  return output;
};

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const printEveryNumber = (n) => {
  // do recursion for negative numbers, if any
  if (n <= 0) printEveryNumber(n + 1);
  // do recursion for positive numbers, if any
  if (n > 1) printEveryNumber(n - 1);
  console.log(n);
};
printEveryNumber(-5); // 1 0 -1 -2 -3 -4 -5
printEveryNumber(5); // 1 2 3 4 5

////Part 2: Thinking Methodically
const testArr = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//Sort the array by age.
const sortByAge = (arr) => arr.sort((a, b) => Number(a.age) - Number(b.age));
console.log(sortByAge(testArr));

//Filter the array to remove entries with an age greater than 50.
const filterOlderThan = (arr, n) => arr.filter((e) => !(e.age > n));
console.log(filterOlderThan(testArr, 50));

//Map the array to change the “occupation” key to “job” and increment every age by 1.
const remap = (arr) =>
  arr.map((e) => ({
    id: e.id,
    name: e.name,
    job: e.occupation,
    age: ++e.age,
  }));
console.log(remap(testArr));

//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.
const avgAge = (arr) =>
  Math.round(arr.reduce((total, e) => total + e.age, 0) / arr.length);
console.log(avgAge(testArr)); //52

////Part 3: Thinking Critically
let testObj = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//Take an object and increment its age field.
const incrementAge = (obj) => {
  obj.updated_at = new Date(); // Date object with the current time
  obj.age = ++obj.age | 0; // if the object does not yet contain an age field, create one and set it to 0
  return obj;
};
console.log(incrementAge(testObj)); //age: 112
console.log(testObj); //age: 112

//Take an object, make a copy, and increment the age field of the copy. Return the copy.
const incrementAgeCopy = (obj) => ({
  ...obj,
  age: (obj.age + 1) | 0, // if the object does not yet contain an age field, create one and set it to 0
  updated_at: new Date(), // Date object with the current time
});
console.log(incrementAgeCopy(testObj)); //age: 113
console.log(testObj); //age: 112

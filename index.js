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

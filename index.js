////Part 1: Thinking Functionally

//Take an array of numbers and return the sum.
const sum = (arr) => {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

console.log(sum([1, 2, 3, 4, 5]));

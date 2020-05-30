// ES5
// function checkNum() { 
//   const args = Array.prototype.slice.call(arguments);
//   console.log(args)
//   console.log(toString.call(args));
//   const result = args.every((v) => typeof v === "number");
//   console.log(result);
// }

// ES6
function checkNum(...args) {
  console.log(toString.call(args));
  const result = args.every((v) => typeof v === "number");
  console.log(result);
}

// const result = checkNum(10, 2, "55");
const result = checkNum(10, 2, 3, 4, 5, "55");
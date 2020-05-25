// setTimeout(()=>{
//   console.log("setTimeOut arrow");
// ;}, 1000);

// let newArr = [1,2,3,4,5].map(function(value, indes, object) {
//   return value * 2;
// })


let newArr = [1,2,3,4,5].map((v) => (v * 2)); // 그냥 괄호 없이 v * 2 해도 됨

console.log(newArr);
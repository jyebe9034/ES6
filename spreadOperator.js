let pre = ["apple", "orange", 100];
let newData = [...pre]; // ...은 그냥 뒤의 값을 펼쳐주는 것
console.log(pre, newData);
console.log(pre === newData); // false, 같은 값을 참조하지 않음. 그냥 새로운 배열을 복사했다고 생각하면 됨

let arr = [100, 200, "hello", null];
let newArr = [0, 1, 2, ...arr, 3];
console.log(newArr);

function sum(a,b,c) {
  return a+b+c;
}
let numArr = [100, 200, 300];

console.log(sum.apply(null, numArr)); // apply는 두번째 인자의 값으로 배열을 받을 수 있음

console.log("result => ", sum(...numArr));
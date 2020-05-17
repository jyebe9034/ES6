// map & weakMap
// Array -> set, weakset
// Object -> map, weakmap

let wm = new WeakMap();
let myfun = function() {};
// 이 함수가 얼마나 실행됐지?를 알려고 할 때,

wm.set(myfun, 0);

console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
  count = wm.get(myfun); // get value
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));

myfun = null; // 객체가 초기화 되면 garbage colletor의 대상이 됨..
console.log(wm.get(myfun)); // undefined
console.log(wm.has(myfun)); // false
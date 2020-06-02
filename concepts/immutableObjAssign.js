const previousObj = {
  name : "jyebe",
  lastTime : "08:20"
};

// 세번째 인자값에 다른 값을 넣지않고 {}만 넣어도 
// previous랑 myHealth는 다른 객체이다.
const myHealth = Object.assign({}, previousObj, {
  "name" : "hannah",
  "age" : 20
})
//const myHealth = Object.assign({}, previousObj, {}) 이런 식으로!

console.log(previousObj === myHealth); // false
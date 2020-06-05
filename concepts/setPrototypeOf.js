const healthObj = {
  showHealth : function() {
    console.log("The Time of work out today is :" + this.healthTime);
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}

// const myHealth = {
//   name: "hannah",
//   lastTime: "11:25"
// };

// Object.setPrototypeOf(myHealth, healthObj); // myHealth의 프로토타입으로 healthObj를 지정

// 이렇게 간단하게 표현 가능함
const newObj = Object.setPrototypeOf({
  name: "hannah",
  lastTime: "11:25"
}, healthObj);

// console.log("my Health is : ", myHealth);
console.log(newObj);
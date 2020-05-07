let obj = {
  name : "hannah",
  address : "Korea",
  age : 20
}

// let {name, age} = obj; // 이렇게 원하는 값만 할당받는게 가능함
// console.log(name, age);

let {name:myName, age:myAge} = obj; // 다른 변수이름으로 받고 싶은 경우
console.log(myName, myAge);

// function home () {
//   const homename = 'my house';
//   homename = 'your house';
//   console.log(homename);
// }

// home();

function fruit () {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list);
}

fruit();

// immutable array를 어떻게 만들지?
// 뒤로가기. 앞으로 가기
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list);
console.log(list2);
console.log(list === list2);
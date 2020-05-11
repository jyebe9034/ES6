let mySet = new Set();
// console.log(toString.call(mySet));

// set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용

mySet.add("jyebe");
mySet.add("hannah");
mySet.add("jyebe");

// console.log(mySet.has("jyebe")); // true

mySet.delete("jyebe"); // 여기서 jyebe를 삭제하면 밑에서 hannah만 출력됨

mySet.forEach(function(v) {
  console.log(v); // jyebe랑 hannah 각각 1개씩만 출력됨
})


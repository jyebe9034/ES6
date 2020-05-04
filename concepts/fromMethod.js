function addMark() { // 매개변수를 정하지 않아도 값을 받을 수 있음. 내부적으로 arguments라는 배열과 비슷한 객체가 있음.
  // let newData = [];

  // for (let i = 0; i < arguments.length; i++) {
  //   newData.push(arguments[i] + "!");
  // }

  let newArr = Array.from(arguments); // arguments는 배열이 아니기 때문에 map으로 돌릴 수 없음. 이럴때 from을 사용해서 쉽게 배열로 변환해줄 수 있음.
  let newData = newArr.map(function(value) {
    return value + "!";
  });

  console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
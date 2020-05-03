var data = [1, 2, undefined, NaN, null, ""];
data.forEach(function(value){
  console.log("value is", value);
})

// 이렇게 추가하면 아래에서 마지막 값으로 function(){}이 출력됨..
Array.prototype.getIndex = function(){}; 

// for in을 쓰면 위에서 prototype에 추가된 function이 출력되기 때문에 쓰면 안됨
for(let idx in data) {
  console.log(data[idx]); 
}

// for of를 쓰면 prototype에 추가된 function은 출력되지 않음
for(let value of data) {
  console.log(value); 
}

let str = "hello!!";
// string을 for of로 돌리면 char형태로 하나씩 꺼내줌
for(let value of str) {
  console.log(value);
}
function print() {
  let fruits = document.querySelectorAll("li");
  let arr = Array.from(fruits);
  let eArr = arr.filter(function(v){
    return v.innerText.includes("e");
  })
  return eArr;
}

console.log(print()); // html이랑 연동 어떻게 해...?
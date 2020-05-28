function sum(value, size=1) {
  return value * size;
}

function sum2(value, size={value:1}) {
  return value * size.value;
}

console.log(sum2(3,{value:0}));
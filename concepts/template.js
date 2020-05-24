const data = [
  {
    name : 'coffee-bean',
    order : true,
    items : ['americano', 'latte', 'green-tea']
  },
  {
    name : 'starbucks',
    order: false
  },
  {
    name : 'twosomeplace',
    order: true,
    items : ['vanilla-latte', 'camomile']
  }
]

// Tagged template literals
function fn(tags, name, items) {
  if (typeof items === "undefined") {
    items = "주문 가능한 상품이 없습니다."
  }
  return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v) => {
let template = fn`<h2>welcome ${v.name}!!</h2>
  <h4>주문가능항목</h4><div>${v.items}</div>`;

  console.log(template);  
})

// const template = fn`<div>welcome ${data[0].name}!!</div>
//   <h2>주문가능항목</h2><div>${data[0].items}</div>`;

// console.log(template);
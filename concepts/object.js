function getObj() {
  const name = "hello"

  const getName = function() {
    return name;
  }

  const setName = function(newName) {
    name = newName;
  }

  const printName = function() {
    console.log(name);
  }

  return {getName, setName, name}
}

const obj = getObj();
console.log(obj);
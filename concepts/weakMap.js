
const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, {height, width});
}

Area.prototype.getArea = function() {
  const {height, width} = wm.get(this);
  return height * width;
}

let myarea = new Area(10, 20);
// console.log(myarea.getArea());
// console.log(myarea.width);

console.log(wm.has(myarea));
console.log(wm.get(myarea));

myarea = null;

console.log(wm.has(myarea));
console.log(wm.get(myarea));
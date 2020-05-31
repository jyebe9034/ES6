 
// function Health(name) {
//   this.name = name;
// }

// Health.prototype.showHealth = function() {
//   console.log(this.name + "Hi");
// }

// const h = new Health("jyebe");
// h.showHealth();

// ES6 Class(위의 코드와 동일한 내용 but class를 사용함.)
class Health {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }

  showHealth() {
    console.log("Hi " + this.name);
  }
}

const myHealth = new Health("hannah");
myHealth.showHealth();
console.log(toString.call(Health)); // 클래스도 결국 함수임.
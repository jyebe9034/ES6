// object assign 메서드
const healthObj = {
  showHealth: function () {
    console.log("오늘은 운동시간 : " + this.healthTime);
  }
}

// 첫번째 방법
const myHealth = Object.create(healthObj);
myHealth.healthTime = "11:20";
myHealth.name = "hannah";

// 두번째 방법
const myHealth2 = Object.assign(Object.create(healthObj), {
  name: "jyebe",
  lastTime: "11:30"
}); // { 이 안에 바로 값을 넣어서 만드는 걸 object assign이라고 하는 듯 }

console.log(myHealth2);
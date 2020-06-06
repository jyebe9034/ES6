// parent
const healthObj = {
  showHealth : function() {
    console.log("The Time of work out today is :" + this.healthTime);
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}

// child
const healthChildObj = {
  getAge : function() {
    return this.age;
  }
}

Object.setPrototypeOf(healthChildObj, healthObj);

// healthObj > healthChildObj > childObj 의 상속구조
const childObj = Object.setPrototypeOf({
  age: 22
}, healthChildObj);

childObj.setHealth("12:07");
childObj.showHealth(); // 결과값 : The Time of work out today is :12:07

// console.log(childObj);
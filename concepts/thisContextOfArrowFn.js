const myObj = {
  // runTimeout() {
  //   setTimeout(function() {
  //     this.printData();
  //   }.bind(this), 200);
  // },

  runTimeout() {
    setTimeout(() => { 
      // arrow function을 쓸땐 this가 window를 가르키지 않음
      // this가 선언되어 있는 오브젝트를 가리킴.
      console.log(this === window);
      this.printData();
    }, 200);
  },

  printData() {
    console.log("hi there!");
  }
}

myObj.runTimeout();
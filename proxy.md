# proxy

```
const myObj = {name:'jyebe'};
undefined
const proxy = new Proxy(myObj, {});
undefined
proxy.name;
"jyebe"
proxy.name = "hannah";
"hannah"
proxy.name;
"hannah"
toString.call(proxy);
"[object Object]"
proxy;
Proxy {name: "hannah"}
myObj
{name: "hannah"}
proxy === myObj;
false
proxy.name === myObj.name
true
```

### proxy객체 안의 값을 바꾸려고 하면 자동으로 set함수가 동작함

```
const myObj = {name:'hannah'};
const proxy = new Proxy(myObj, {
    get: function() {
    },
    set: function() {
        console.log('change value');
    }
});
undefined
proxy.name = 'jyebe';
change value
"jyebe"
```

### get의 인자값
```
const myObj = {name:'hannah'};
const proxy = new Proxy(myObj, {
    get: function(target, property, receiver) { // reseiver 는 proxy객체 자체를 말함
        console.log('get value');
        return target[property];
    },
    set: function() {
        console.log('change value');
    }
});
undefined
proxy.name;
get value
"hannah"
proxy.name = 'jyebe'
change value
"jyebe"
proxy.name;
get value
"hannah"
```

### set의 인자값
```
const myObj = {name:'hannah'};
const proxy = new Proxy(myObj, {
    get: function(target, property, receiver) {
        console.log('get value');
        return target[property];
    },
    set: function(target, property, value) { // 여기서의 target은 myObj를 가리킴
        console.log('set value');
        target[property] = value;
    }
});
```

### changedValue추가 (값이 변경될때마다 1씩 증가하는 변수)

```
const myObj = {name:'hannah', changedValue: 0};

const proxy = new Proxy(myObj, {
    get: function(target, property, receiver) {
        console.log('get value');
        return target[property];
    },
    set: function(target, property, value) { // 여기서의 target은 myObj를 가리킴
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});
undefined
proxy.name = 'sdfsdf';
set value
"sdfsdf"
proxy.name = 'cd';
set value
"cd"
myObj;
{name: "cd", changedValue: 2}
(...생략)
proxy.changedValue;
get value
2
```

### 없는 property값을 찾을 때 default값 설정

```
const proxy = new Proxy({name:'hannah', changedValue: 0}, {
    get: function(target, property, receiver) {
        return (property in target) ? target[property] : "anonymous";
    },
    set: function(target, property, value) { // 여기서의 target은 myObj를 가리킴
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});
undefined
proxy.name
"hannah"
proxy.age
"anonymous"
```

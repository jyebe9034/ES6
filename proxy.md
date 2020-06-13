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

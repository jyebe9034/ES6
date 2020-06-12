### proxy

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


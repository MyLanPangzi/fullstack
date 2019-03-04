/**
 * 1，TS是结构化类型系统，它的设计是基于现有JS代码的写法，经常出现的匿名函数，对象字面量
 * 2，TS的类型兼容是仅基于对象成员，只要源对象有目标对象相应的成员（一模一样的声明或者是any类型）就是兼容的
 */
interface Named {
    name: string;
    // location:string;
}
let y = {name:'Hello', location: 'China'};
let x:Named;
x = y;
// y = x;//Property 'location' is missing in type 'Named' but required in type '{ name: string; location: string; }'.
function f(n:Named):void {
    console.log(n.name);
}

f(x);
f(y);
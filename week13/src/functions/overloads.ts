/**
 * 1，TS,JS是动态语言，没有JAVA,C#静态语言一样的重载
 * 2，TS中的重载只是语法糖，多个方法声明，只有一个实现，用在编译器限制调用方式
 * *
 */
function f(x: number): number;
function f(x: object): object;
function f(x): any {
    if (typeof x === 'number') {
        return 10;
    } else if (typeof x === 'object') {
        return {};
    }
}

console.log(f(10));
console.log(f({}));
// console.log(f(false));//Argument of type 'false' is not assignable to parameter of type 'object'
// console.log(f('1'))
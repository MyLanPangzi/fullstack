/**
 * 1，语法跟C#类似，跟JAVA有区别
 * 2，具体语法看案例
 */
function identity<T>(arg: T): T {
    return arg;
}

const f = <T>(arg: T): T => arg;
const f2: <T>(arg: T) => T = <T>(arg: T) => arg;
const f3 = function <T>(arg: T): T {
    return arg;
};
console.log(identity(1));
console.log(identity<number>(1));
console.log(f(1));
console.log(f<string>('a'));
console.log(f2(2));
console.log(f3(3));
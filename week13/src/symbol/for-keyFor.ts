/**
 * 1，Symbol.for方法返回的symbol值会登记在全局环境中，跨iframe，worker也能取到
 * 2，Symbol.keyFor取一个symbol值的描述字符串
 */
let s1: symbol = Symbol.for("123");
let s2: symbol = Symbol.for("123");
console.log(s1 === s2);
console.log(Symbol.keyFor(s1), Symbol.keyFor(s2));

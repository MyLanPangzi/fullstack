/**
 * 1，...声明，然后带上类型数组，函数内部使用就是一个数组
 * 2，JS中类数组对象arguments，只能在函数体内使用
 * 3，用来收集不固定数量的参数，高级主题：柯里化
 */
let sum = (...args: number[]): number => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum(1, 2, 3, 4, 5, 6));

let mul: (...args: number[]) => number = (...args) => args.reduce((pre, cur) => pre * cur, 1);
console.log(mul(1, 2, 3));
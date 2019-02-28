/**
 *  1，函数组成：参数列表，返回值
 *  2，类型推断：通过声明推断定义/通过定义推断类型
 */
let add: (x: number, y: number) => number = (x, y) => x + y;
console.log('add', add(1, 2));
let sub = (x: number, y: number) => x - y;
console.log('sub', sub(1, 3));
let mul: (x: number, y: number) => number = (x, y) => x * y;
console.log('mul', mul(2, 3));
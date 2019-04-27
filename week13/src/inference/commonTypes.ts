/**
 * 1,类型推断算法会选出最合适的常见候选类型，一般来说是union type
 * 2，如果数组中所有类型都有公共基类，且数组中有基类的对象，则会推断出最佳候选类型是基类
 * 3，如果没有基类的对象，则推断出union type
 */
let arr = [1, null];
console.log(arr);
/**
 * 1，可以使用部分泛型类型变量，如数组
 * 
 */
function f<T>(arr: T[]): T[] {
    console.log(arr.length);
    return arr;
}

let f2 = <T>(arr: Array<T>) => arr;

console.log(f([1, 2, 3, 4]));
console.log(f2([4]));
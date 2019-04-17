/**
 * 1，hasInstance 可以部署在类的静态端，实例端
 * 2，instanceof操作符左侧只能是实例类型，右侧是类类型或者函数
 * 3，使用instanceof操作符时，会调用右侧的[Symbol.hasInstance]方法
 */

class MyClass {
    static [Symbol.hasInstance](i: Array<any>): boolean {
        return i instanceof Array;
    }
}

const b = [1, 2, 3] instanceof MyClass;
console.log(b);

class Even {
    static [Symbol.hasInstance](n: Number): boolean {
        return (n as number) % 2 == 0;
    }
}

// const E: object = {
//     [Symbol.hasInstance](o: number): boolean {
//         return o % 2 === 0;
//     }
// }
let num: Number = Math.ceil(Math.random() * 10);
console.log(num instanceof Even, num);
// console.log(2 instanceof E);

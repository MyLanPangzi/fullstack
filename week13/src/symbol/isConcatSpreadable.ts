/**
 * A Boolean value that if true indicates that an object should flatten to its array elements
 by Array.prototype.concat.
 * 1， isConcatSpreadable描述了一个对象是否能用于数组的concat方法
 * 2，一般来说是部署在实例端
 * 3，数组的isConcatSpreadable是undefined，但默认是可展开的
 */
export default {};
// console.log([1][Symbol.isConcatSpreadable]);
let a: Array<number> = [1, 2, 3];
const b = a.concat([4, 5, 6]);
// console.log(b);
let c: number[] = [7, 8, 9];
c[Symbol.isConcatSpreadable] = false;
// console.log(b.concat(c));

let o: object = {
    get [Symbol.isConcatSpreadable](): boolean {
        return true;
    },
    length: 1,
    0: 0
};

// console.log(c.concat(o as number[]));

class A1 extends Array {
    constructor() {
        super();
        this[Symbol.isConcatSpreadable] = true;
    }

}

class A2 extends Array {
    constructor() {
        super();
        this[Symbol.isConcatSpreadable] = false;
    }

}

let a1: A1 = new A1();
a1.push(1, 2, 3);
let a2: A2 = new A2();
a2.push(4, 5, 6);
// for (let i of a1.concat(a2)) {
//     console.log(i);
// }
for (let i of a2.concat(a1)) {
    console.log(i);
}
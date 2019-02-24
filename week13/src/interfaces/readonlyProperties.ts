/**
 * 只读属性，只能在初始化的时候被改变
 * 属性用readonly，变量用const
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

const p: Point = {x: 10, y: 0};
// p.x = 100;//Cannot assign to 'x' because it is a read-only property
console.log(p);

/**
 * ReadonlyArray,ReadonlySet,ReadonlyMap（ all mutating methods removed, ）所有的改变方法都被移除了
 * 下标赋值，set等等
 */
let arr: number[] = [1, 2, 3, 4];
const readonlyArr: ReadonlyArray<number> = arr;
// readonlyArr[0]=10;// Index signature in type 'ReadonlyArray<number>' only permits reading.
// arr = readonlyArr;//Type 'ReadonlyArray<number>' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.
arr = readonlyArr as number[];

console.log(readonlyArr, arr);

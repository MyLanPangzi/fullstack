/**
 * boolean类型
 */
const isDone: boolean = false;
console.log(typeof isDone, isDone);
/**
 * number类型
 */
const binary: number = 0b0101;
console.log(typeof binary, binary);
const octal: number = 0o7;
console.log(typeof octal, octal);
const decimal: number = 10;
console.log(typeof decimal, decimal);
const hex: number = 0XFFFFF;
console.log(typeof hex, hex);

/**
 * string类型
 */
const singleQuote: string = 'Hello TypeScript';
console.log(typeof singleQuote, singleQuote);
const doubleQuote: string = "你好，世界";
console.log(typeof doubleQuote, doubleQuote);
const backquote: string = `这里是模板字符串 ${singleQuote}  ${doubleQuote}`;
console.log(typeof backquote, backquote);

/**
 * 特殊的空值类型
 */
const nul: null = null;//设计缺陷，null是单独的一个类型，不是object
console.log(typeof nul, nul);
const undifne: undefined = undefined;
console.log(typeof undifne, undifne);

/**
 * 泛型数组类型
 */
const array: number[] = [1, 2, 3, 4];
console.log('array', typeof array, array);
const genericArr: Array<string> = ['a', "b", `C${array}`];
console.log('genericArray', typeof genericArr, genericArr);

/**
 * 元组类型
 */
let tuple: [string, number] = ['Hello', 1];
console.log('tuple', typeof tuple, tuple);
tuple[1] = 4;
console.log('tuple', typeof tuple, tuple);
// tuple[2] = 'a';//Type '"a"' is not assignable to type 'undefined'.
//超出下标无法使用，官网介绍，用union类型替代 string|number

/**
 * 枚举类型
 */
enum Color {
    Red, Yellow, Blue
}

const red: Color = Color.Red;
console.log('red', typeof red, red);

enum Week {
    Monday = '周一',
    Tuesday = '周二',
    Wednesday = '周三',
    Thursday = '周四',
    Friday = '周五',
    Saturday = '周六',
    Sunday = '周日'
}

const day: Week = Week.Saturday;
console.log('Saturday', typeof day, day);

/**
 * Void，声明变量并没有什么luan用，只是用于函数声明
 * @param name
 */
function hello(name: string): void {
    console.log('hello', name);
}

const Void: void = hello('world');
console.log('Void', typeof Void);

/**
 * Never类型，不能被赋值........
 */
function throwError() {
    throw new Error('抛出了一个错误');
}

function applyThrowError() {
    throwError();
}

function loopEver() {
    while (true) {

    }
}

// const error: never = throwError();
/**
 * Any类型以及类型断言
 */
const someString: any = '一些字符串';
console.log('someAny长度：', (<string>someString).length);
console.log('someAny长度：', (someString as string).length);

/**
 * Object类型，只能赋值non-primitive，非原始类型
 */
let o: object = {};
// o=1;//Type '1' is not assignable to type 'object
export {};
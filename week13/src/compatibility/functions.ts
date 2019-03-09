/**
 * 1，函数兼容性，先是参数列表，源参数列表必须在目标参数列表有相应的兼容类型
 * 2，然后是返回值，源函数返回值必须是目标函数返回值的子类型
 * 3，满足上面2个条件，函数就是兼容的
 * 4，函数参数可以双向协变，即声明一个类型，可传入兼容类型，有点类似于多态，用基类声明，可传入派生类
 * 5，可选与必选参数是可互换的，rest参数是一个无边界的可选参数数组，意思是同参数列表的函数（返回值兼容），不管参数是不是可选都是兼容的。
 * let optional: (x: number, y: number) => number = (x, y) => x + y;
 * let required: (x: number, y?: number) => number = (x, y) => x + y;
 * 这两个可以相互赋值
 * 6，函数重载，手册写的是，每一个重载声明必须在目标函数有对应的兼容签名（为了保证在源函数出现的地方，目标函数也能出现），实测貌似没有这个限制。
 * function overloadSrc(arg: number): number
 function overloadSrc(arg: string): string
 function overloadSrc(arg: string | number): any {
    if (typeof arg === 'string') {
        return arg.concat('字符串');
    }
    if (typeof arg === 'number') {
        return arg + 1;
    }
}

 // let overloadDest: (arg: string | number | null | undefined) => any;
 let overloadDest: (arg: string) => void;
 let overloadDest2: (arg: number) => void;
 let overloadDest3: (arg: number | string) => void;
 overloadDest = overloadSrc;
 overloadDest2 = overloadSrc;
 overloadDest3 = overloadSrc;

 */
let x = (a: number): string => 'a';
// let x = (a: number): undefined => undefined;
// let x = (a: number): null => null;
// let x = (a: number): any => 'a';
// let y = (a: any, b: string): string => 'a';
// let y = (a: number, b: string): string => 'a';
// let y = (a?: number): string => 'a';
let y = (a: number, b: string): string => 'a';

y = x;

// x = y;//TS2322: Type '(a: number, b: string) => void' is not assignable to type '(a: number) => void'.
enum EventType {
    Mouse, Keyboard
}

interface Event {
    timestamp: number
}

interface MouseEvent extends Event {
    X: number;
    Y: number;
}

interface KeyEvent extends Event {
    keyCode: number;
}

function listenEvent(type: EventType, handler: (e: Event) => void): void {

}

listenEvent(EventType.Mouse, (e: MouseEvent) => {
    console.log(e.X);
});
listenEvent(EventType.Keyboard, (e: KeyEvent) => {
});
// listenEvent(EventType.Mouse,( e:{timestamp:number}) => {});
// listenEvent(EventType.Mouse,( e:number) => {});//error

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    callback(...args);
}

invokeLater([1, 2], (x, y) => console.log(x, y));
let optional: (x: number, y: number) => number = (x, y) => x + y;
let required: (x: number, y?: number) => number = (x, y) => x + y;
optional = required;
required = optional;


function overloadSrc(arg: number): number
function overloadSrc(arg: string): string
function overloadSrc(arg: string | number): any {
    if (typeof arg === 'string') {
        return arg.concat('字符串');
    }
    if (typeof arg === 'number') {
        return arg + 1;
    }
}

// let overloadDest: (arg: string | number | null | undefined) => any;
let overloadDest: (arg: string) => void;
let overloadDest2: (arg: number) => void;
let overloadDest3: (arg: number | string) => void;
overloadDest = overloadSrc;
overloadDest2 = overloadSrc;
overloadDest3 = overloadSrc;

console.log(overloadDest('aa'));
console.log(overloadDest2(1));
console.log(overloadDest3(2));
console.log(overloadDest3('bb'));
/**
 * 1，函数兼容性，先是参数列表，源参数列表必须在目标参数列表有相应的兼容类型
 * 2，然后是返回值，源函数返回值必须是目标函数返回值的子类型
 * 3，满足上面2个条件，函数就是兼容的
 * 4，函数参数可以双向协变，即声明一个类型，可传入兼容类型，有点类似于多态，用基类声明，可传入派生类
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
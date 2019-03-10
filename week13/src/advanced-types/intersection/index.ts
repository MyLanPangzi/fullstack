/**
 * 1，交叉类型，意思是取两个类型的成员并集（只取声明并集），例如 class A 有x属性，class B有 y属性，则A&b类型具有x,y属性
 * 2，原始类型不可交叉叠加，虽然语法没有错，但声明类型后无法赋予实际意义值（可以赋值为null/undefined/any/never，因为这几个类型是所有类型的子类型）
 * 3，当多个源类型具有相同的属性时（不是原始类型），则交叉属性的所有声明
 */
class A {
    constructor(public x: number) {

    }
}

class B {
    constructor(public y: number) {

    }
}

let ab: A & B;
ab = {
    x: 1, y: 2
}
let sn: string & number = null;
sn = undefined;
sn = {} as any;
sn = {} as never;
type P = { p: { x: number } } & { p: { y: string; }; };
let props = {
    p: {
        x: 1, y: 'a'
    }
}
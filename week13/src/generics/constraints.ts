/**
 * 0，TS是结构化类型系统
 * 1，泛型类型约束使用extends关键字，只要满足extends的类型结构就行
 * 2，可通过类型参数再次约束泛型类型参数，使用keyof关键字获取另一个类型的结构，获取的结构是union类型
 * 3，可使用Class Types约束泛型，通过使用构造函数约束：语法有点意思 let f = <T>(c:{new():T}):T
 *      或者是c : new () => T其实都一样是类型兼容的。
 */
interface Lengthwise {
    length: number;
}

let f = <T extends Lengthwise>(arg: T): T => {
    console.log(arg.length)
    return arg;
};

f({length: 0});
f([1, 2, 3, 4, 5]);

let getProp = <T, K extends keyof T>(o: T, k: K): any => o[k];
let o = {
    a: '1',
    b: '1',
    c: '1',
};
console.log(getProp(o, 'a'));
console.log(getProp(o, 'b'));
console.log(getProp(o, 'c'));

// console.log(getProp(o, 'd'));//Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

let getKeeper = <T extends ZooKeeper>(arg: { keeper: T }): T => arg.keeper;
let create = <T extends Animal>(c: new() => T): T => new c();
const bee = create(Bee);
const lion = create(Lion);
bee.keeper = new BeeKeeper();
lion.keeper = new ZooKeeper();
console.log(bee.keeper.hasMask);
console.log(lion.keeper.nametag);
console.log(getKeeper(lion));
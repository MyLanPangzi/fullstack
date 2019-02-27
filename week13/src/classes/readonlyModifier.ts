/**
 * 1，用在属性上
 * 2，用在构造函数上，是一种快捷方式，属性与赋值合并
 * 3，可与其他修饰符一起使用
 * 4，要么在定义时初始化，要么在构造函数初始化，否则值为undefined
 */
class Octopus {
    constructor(readonly name: string, readonly numberOfLegs: number) {
        this.numberOfLegs = 10;
    }
}

const octopus: Octopus = new Octopus('章鱼', 20);
// octopus.name = 'haha';// Cannot assign to 'name' because it is a read-only property
console.log(octopus.name, octopus.numberOfLegs);

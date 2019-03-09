/**
 * 1，类的兼容性跟对象字面量以及接口的兼容规则类似
 * 2，类的静态成员以及构造函数（其实构造函数也属于静态成员）不会影响兼容性
 * 3，如果类中有private，protected成员，则要求目标类型或者原始类型的成员声明必须来自同一个类，即使类的模型相同也是不兼容的
 */
class Animal {
    static age: number = 0;

    constructor(public name: string) {

    }
}

class Person {
    static gender: string = 'M';

    constructor(public name: string) {

    }
}

class Cat {
    constructor(public name: string, private age: number) {
    }
}

class Dog extends Animal {

    constructor(public name: string, private age: number) {
        super(name);
    }
}


let a: Animal = new Animal('动物');
let p: Person = new Person('人');
a = p;
p = a;
let c: Cat = new Cat('咪咪', 1);
let d: Dog = new Dog('狗狗', 1);
// c=d;//Type 'Dog' is not assignable to type 'Cat'.   Types have separate declarations of a private property 'age'.
// d=c;
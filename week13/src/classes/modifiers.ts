/**
 * TypeScript is a structural type system.
 * When we compare two different types,
 * regardless of where they came from,
 * if the types of all members are compatible,
 * then we say the types themselves are compatible.
 * TypeScript是一个结构化类型系统，只要两个类型成员是兼容的，我们就说这2个类型是兼容的
 * 例如,
 * class Animal{ constructor(public name:string){} move(){}}
 * class Employee{ constructor(public name:string){} move(){}}
 * const animal:Animal = new Animal('a');
 * const employee:Employee = new Employee('b');
 * animal = employee;或者 employee = animal;
 * 这都是合法的，这就是类型兼容
 *
 * 然而，这仅适用于没有private,protected的属性
 * 如有含有上面2个修饰符的属性，则要求所有属性都来自同一声明，也就是同一个基类
 */
class Animal {
    private static a:number = 10;
    private static m = () => {

    };

    // private get g() {
    //    return 0;
    // }
    constructor(public name: string) {

    }

    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

class Pig extends Animal {
    constructor(name: string, private weight: number) {
        super(name);
    }

    sleep() {
        console.log(`${this.weight}斤的猪在睡觉`);
    }
}

class Cat extends Animal {
    constructor(name: string, protected variety: string) {
        super(name);
    }

    bark() {
        console.log(`${this.variety} 在喵喵喵`);
    }
}

let animal: Animal = new Animal('动物');
const pig: Pig = new Pig('猪', 200);
const cat: Cat = new Cat('猫', '英短');
animal.move(20);
pig.sleep();
cat.bark();

class Rihno extends Animal {
    constructor(name: string) {
        super(name);
    }

}

class Employee {
    constructor(public name: string) {

    }
    move(distance:number){}
}

const rihno: Rihno = new Rihno('犀牛');
let employee: Employee = new Employee('员工');
animal = rihno;
// animal = {name: 'aa', move(){}};
animal = employee;
employee = animal;
// 如果employee的name不是public就会报错Property 'move' is missing in type 'Employee' but required in type 'Animal'.

class Person {
   protected constructor(protected name: string) {

    }
}

class Manager extends Person {
     constructor(name: string, private department: string) {
        super(name);
    }

    show() {
        console.log(`我是${this.name},我在${this.department}工作`);
    }
}

const m: Manager = new Manager('大卫', '主管');
m.show();

// const p: Person = new Person('人');
// Constructor of class 'Person' is protected and only accessible within the class declaration.
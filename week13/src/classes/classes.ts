/**
 * ES6之前，一个function就是一个类声明，约定俗成，大写开头的方法名就是类
 * 类中的this指向当前对象，就是new出来的对象。
 */
class Greeter {
    greeting:string;

    constructor(message: string) {
        this.greeting=message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

const greeter: Greeter = new Greeter('World');
console.log(greeter.greet());

export {};
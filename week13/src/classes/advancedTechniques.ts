/**
 * 1，声明一个类，做了两件事情，JS中没有类的概念，类就是函数
 *      a，声明了一个类型，
 *      b,定义了一个构造函数
 * class A{} ==> function A(){}
 *typeof A其实就是获取A.prototype.constructor也就是A。。。。很绕吧
 *
 * 2，由于类声明了一个类型，所以接口也可以继承类，在接口章节有详细解释
 *
 */
class Greeter {
    static defaultGreeting: string = '你好';
    greeting: string;
    // constructor(public greeting: string) {
    //
    // }

    greet(): string {
        if (this.greeting) {

            return `Hello，${this.greeting}`;
        } else {
            return Greeter.defaultGreeting;
        }
    }
}

let greeter: Greeter;
greeter = new Greeter();
console.log(greeter.greet());

let maker: typeof Greeter = Greeter;
console.log('maker is ', maker);
maker.defaultGreeting = '你好，世界';
const greeter1 = new maker();
console.log(greeter1.greet());
console.log(greeter.greet());
console.log(Greeter.prototype.constructor === Greeter);
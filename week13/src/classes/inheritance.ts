/**
 * ES6以前使用function加prototype实现继承
 * function A(a){}; A.prototype = {};
 * function B(b){A.call(this,a); this.b = b;}; B.prototype = Object.create(A.prototype,{});
 * B.prototype.constructor = B;
 * 非常笨重，难以理解
 * 模板继承，混合继承
 * 子类模板prototype等于父类实例，缺点，只继承了原型链，没有继承模板方法
 * 子类模板调用父类方法，缺点，继承了模板但没有继承原型链
 * 混合继承，使用上述两种方法继承
 * ES6的class就是类似的语法
 * ES6使得Javascript跟Java,C#面向对象的语言类似
 * 使用extends关键字继承，只允许单继承，多实现
 * <a>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</a>
 */

class Animal {
    constructor(public name: string) {
    }

    move(distanceInMeter: number = 0) {
        console.log(`Animal moved ${distanceInMeter}m`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() {
        console.log('Woof Woof');
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeter: number = 0) {
        console.log('Slithering');
        super.move(distanceInMeter);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeter: number = 0) {
        console.log('Galloping...');
        super.move(distanceInMeter);
    }
}

const dog = new Dog('dog');
dog.move(10);
dog.bark();
console.log(dog.name);

const snake: Snake = new Snake('snake');
const horse: Horse = new Horse('horse');
snake.move(3);
horse.move(30);

export {};
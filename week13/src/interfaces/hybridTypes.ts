/**
 * 接口可以进行混合，即在接口中声明一个函数类型，然后再声明其他属性，方法
 * 既一个接口实例，既可以是函数（就是函数类型/函数式接口），也可以是实例对象
 * 例如，jQuery 既是一个对象，也是一个函数，很多第三方库也是这样
 */
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {

    }
    counter.interval = 10;
    counter.reset = function () {

    };

    return counter;
}

let c = getCounter();
c(10);
c.interval = 20;
c.reset();
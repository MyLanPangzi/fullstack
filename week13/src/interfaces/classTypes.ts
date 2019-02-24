/**
 * 接口能定义属性，方法
 * 强制类实现
 * 类有两种类型，
 * （类的本质也是一个Function实例，Function实例可以拥有自身的属性，methods）
 * 静态端：静态属性，静态方法，constructor
 * 实例端：实例属性，原型方法，实例方法
 */
interface ClockInterface {
    currentTime: Date;

    setTime(d: Date);

    tick(): void;
}

interface ClockConstructor {
    new(h: number, m: number);
}

//Class 'Clock' incorrectly implements interface 'ClockConstructor'.   
// Type 'Clock' provides no match for the signature 'new (h: number, m: number): any'
class Clock implements ClockInterface {//,ClockConstructor {
    currentTime: Date;

    constructor(h: number, m: number) {

    }

    setTime(d: Date) {
        this.currentTime = d;
    }

    tick(): void {
    }

}

function createClock(ctor: ClockConstructor, h: number, m: number) {
    return new ctor(h, m);
}

class DigitalClock extends Clock implements ClockInterface {

    constructor(h: number, m: number) {
        super(h, m);
    }

    tick(): void {
        console.log('didididididi');
    }

}

class AnalogClock extends Clock implements ClockInterface {
    constructor(h: number, m: number) {
        super(h, m);
    }

    tick(): void {
        console.log('tick tack');
    }

}

const digitalClock = createClock(DigitalClock, 10, 0);
digitalClock.tick();
const analogClock = createClock(AnalogClock, 22, 0);
analogClock.tick();


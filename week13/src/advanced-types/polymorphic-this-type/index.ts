/**
 * 1，多态性this，类的方法可以返回this，this的指向变得很灵活，既可以指向父类也可以指向子类
 * 2，可以用来构造fluent API，链式编程
 */
class BasicCalculator {
    constructor(protected value: number = 0) {

    }

    add(x: number) {
        this.value += x;
        return this;
    }

    sub(x: number) {
        this.value -= x;
        return this;
    }

    currentValue() {
        return this.value;
    }
}

let calc = new BasicCalculator(2);
console.log(calc.add(1).sub(2).currentValue());

class ScientificCalculator extends BasicCalculator {
    constructor(value: number) {
        super(value);
    }

    mul(x: number) {
        this.value *= x;
        return this;
    }
}

let value = new ScientificCalculator(2).add(1).sub(2).mul(3).currentValue();
console.log(value)
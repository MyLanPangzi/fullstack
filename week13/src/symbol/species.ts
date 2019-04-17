/**
 * 1，species，一般部署在类静态端
 * 2，symbol.species的作用在于，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数。
 * 它主要的用途是，有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。
 */
class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let a: MyArray = new MyArray();
a.push(1, 2, 3);
let b = a.map(e => e * 2);
let c = a.filter(e => e % 2 === 0);
console.log(b instanceof MyArray, c instanceof MyArray);

export default {};

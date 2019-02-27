/**
 * 0，可细粒度控制属性的访问，C#也有类似的语法
 * 1，只支持ES5及以上
 * 2，无set方法的属性，相当于只读属性
 * 3，set方法有且只有一个参数
 */
class Employee {
    constructor(private _fullName: string) {

    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value: string) {
        throw new Error('不允许设置');
    }
}

const xiaoming: Employee = new Employee('小明');
console.log(xiaoming.fullName);
xiaoming.fullName = '小星星';
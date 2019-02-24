/**
 * 只支持number以及string索引
 * number索引返回的类型必须是string索引的子类
 * 因为number索引的本质也是string索引，例如a[10]等价于a['10']
 * string索引能实现字典模式,可以强制对象所有的属性与索引的返回类型一致
 * 索引可以设置为只读，防止修改索引的值
 */
interface StringArray {
    [index: number]: string;

}

const arr: StringArray = ['A', 'B'];
console.log('indexable types', arr[0]);

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;// Numeric index type 'Animal' is not assignable to string index type 'Dog'

    [x: number]: Dog;

    [x: string]: Animal;
}

interface NumberDictionary {
    [index: string]: number;

    length: number;

    // name: string;// Property 'name' of type 'string' is not assignable to string index type 'number'.
}

const numDic: NumberDictionary = {
    a: 1,
    length: 1
}
console.log('string index', numDic['a']);

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

const readonlyStringArray: ReadonlyStringArray = ['a', 'b', 'c'];
// readonlyStringArray[0] = 'ccc';//Index signature in type 'ReadonlyStringArray' only permits reading.
console.log('readonly index ', readonlyStringArray[1]);
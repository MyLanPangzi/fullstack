/**
 *函数类型接口，类似于C#的委托，C/C++的函数指针，Java的函数式接口
 * 限制：一个接口只能定义一个方法类型，且不能重载
 *可定义其他带有名字的方法，以及属性
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let searchFunc: SearchFunc;
searchFunc = (src, sub) => src.search(sub) > -1;
console.log('searchFunc ', searchFunc('Hello', 'llo'));

export {};
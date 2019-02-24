/**
 *函数类型接口，类似于C#的委托，C/C++的函数指针
 *
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let searchFunc: SearchFunc;
searchFunc = (src, sub) => src.search(sub) > -1;
console.log('searchFunc ', searchFunc('Hello', 'llo'));

export {};
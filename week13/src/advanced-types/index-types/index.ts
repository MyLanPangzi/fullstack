/**
 * 1，索引类型查询操作符，keyof，用来取类T的所有属性声明，其值一般情况下是字符串常量联合类型
 * 2，索引类型访问操作符，T[K]，用来获取泛型上下文的属性声明类型，其值一般情况下是类型T的属性的类型集合
 * 3，索引类型与字符串索引签名，keyof取得的值就是string，同理数值索引签名返回的就是number， T[K]取得的值就是T
 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(k => o[k]);

}

const p = {
    name: 'hello',
    age: 18
}
const results = pluck(p, ['name', 'age']);
let prop: <T, K extends keyof T>(o: T, k: K) => T[K] = (o, k) => o[k];
console.log(prop(p, 'name'));
console.log(prop(p, 'age'));
// console.log(prop(p, 'a'));//TS2345: Argument of type '"a"' is not assignable to parameter of type '"name" | "age"'.
// let r = pluck(p, ['name', 'age','1']);//TS2322: Type 'string' is not assignable to type '"name" | "age"'.
// results.push(false);//TS2345: Argument of type 'false' is not assignable to parameter of type 'string | number'.


interface Map<T> {
    [key: string]: T;
}

let keys: keyof Map<number> = 'a';
let values: keyof Map<number>['aaa'] = 'valueOf';
console.log(typeof keys, typeof values);

interface Set<T> {
    [key: number]: T;
}

let k2: keyof Set<number> = 1;
let v2: keyof Set<number>[0] = 'toString';
console.log(k2, v2);
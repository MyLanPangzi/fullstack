/**
 * 1，泛型兼容只考虑结果类型，也就是使用了泛型变量的具体类型
 *2，若未使用泛型变量，则用any替代使用了泛型参数的地方
 */
interface Empty<T> {

}

let a: Empty<number>;
let b: Empty<string>;
a = b;
b = a;

interface NotEmpty<T> {
    data: T;
}

let n1: NotEmpty<string>;
let n2: NotEmpty<number>;
// n1=n2;//Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'.   Type 'number' is not assignable to type 'string'.

let f1: <T>(arg: T) => void;
let f2: <T>(arg: T) => void;
f1 = f2;
f2 = f1;
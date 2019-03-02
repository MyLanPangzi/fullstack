/**
 * 1,泛型接口跟Java是类似的。。。
 */
interface UnaryFunc<T, R> {
    (arg: T): R
}

interface BinaryFunc<T, U, R> {
    (a: T, b: U): R;
}

let log: UnaryFunc<number, void>;
log = x => {
    console.log(x)
};
log(2);

let add: BinaryFunc<number, number, number>;
add = (x, y) => x + y;
console.log(add(1, 2));
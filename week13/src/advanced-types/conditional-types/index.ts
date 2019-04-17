// declare function f<T extends boolean>(x: T): T extends true ? string : number;
function f<T extends boolean>(x: T): string | number {
    if (x) {
        return 'a';
    } else {
        return 1;
    }
}

// console.log(f(Math.random() < 0.5));
let x = f(Math.random() < 0.5);
console.log(x);

type TypeName<T> =
    T extends undefined ? 'undefined' :
        T extends string ? 'string' :
            T extends boolean ? 'boolean' :
                T extends number ? 'number' :
                    T extends Function ? 'function' :
                        'object';
type T0 = TypeName<string>;
type T1 = TypeName<false>;
type T2 = TypeName<1>;
type T3 = TypeName<undefined>;
type T4 = TypeName<() => {}>;
type T5 = TypeName<[]>;

// let t0: T0 = 'string1';//TS2322: Type '"string1"' is not assignable to type '"string"'.
let t0: T0 = 'string';
let t1: T1 = 'boolean';
let t2: T2 = 'number';
let t3: T3 = 'undefined';
let t4: T4 = 'function';
let t5: T5 = 'object';
/**
 * 0,null/undefined/any/never是所有类型的子类，默认可以赋值给任意类型,never只能赋值给never类型
 * 1，开启--strictNullChecks可显示检测null/undefined赋值
 * 2，可选参数被默认为 type|undefined 联合类型,可选属性也是这样
 * 3,||类型断言操作符能消除联合类型中的空值，if判断也是类型断言也可以用来消除联合类型中的空值
 * 4，当发生闭包时，TS编译器无法追踪函数的调用，可用!操作符消除闭包内的空值检测
 */
let s = 'foo';
// s = null;//TS2322: Type 'null' is not assignable to type 'string'.
// s = undefined;// TS2322: Type 'undefined' is not assignable to type 'string'.
let su: string | undefined;
su = undefined;

function f(x: number, y?: number) {
    return x + (y || 0);
}

// let n:never = {} as never;
console.log(f(1));
console.log(f(1, 1));

// console.log(f(1,null));//Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
function f2(s: string | null): string {
    return s || 'default';
}

console.log(f2('a'));
console.log(f2(null));

function f3(sn: string | null): string {
    return sn || "default";
}

// console.log(f2(undefined));
function fixed(s: string | null): string {
    function postfix(epithet: string): string {
        // TS2531: Object is possibly 'null'.
        return s!.charAt(0).concat('. the').concat(epithet);
    }

    s = s || 'default';
    return postfix(s);
}
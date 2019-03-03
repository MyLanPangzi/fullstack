/**
 *1， 枚举本身是一个对象
 var E;
 (function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
    E[E["C"] = 2] = "C";
    E[E["D"] = 0] = "D";
    E[E["F"] = 0] = "F";
})(E || (E = {}));

 *2，枚举本身做了反向映射，k->v,v->k，引用其他成员，也是当做属性,意味着反向映射的值能覆盖被引用的值
 *3，字符串枚举无反向映射
 */
enum E {
    A, B, C, D = A, F = D
}

function f(e: { A: number }): void {

}

f(E);
console.log(E['A']);
console.log(E['D']);
console.log(E[0]);
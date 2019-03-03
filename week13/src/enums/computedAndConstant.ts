/**
 * 1,每一个枚举都会关联一个常量或计算值，一个枚举被认为是常量值的几种情况：
 *      a，如果首个枚举未赋值，则从0开始计算
 *      b，如果枚举未被赋值，上一个member是numeric则自增一
 *      c，常量表达式，在编译器就能被完全解析：
 *          i，字符串/数字字面量
 *          ii，引用已经定义好的枚举
 *          iii，括号表达式
 *          iv，一元运算符计算常量
 *          v，二元运算符计算常量表达式，如果计算错误则赋值NaN或者Infinity
 *   2，其他情况被认为computed值
 *   3，跟后面的const枚举有关系，const枚举被限制为常量值或者常量值表达式，因为const枚举可以被优化为内联常量值减少代码量
 *
 */
enum Moth {
    January = 1,//数字常量
    Jan = January,//引用其他常量枚举
    February = (Jan + 1),//括号常量表达式，这个不是常量表达式
    March = ~~Jan + 1 + 1,//一元运算符常量枚举
    April = March + 1,//二元运算符常量枚举
    Other = +'a',
    // X = '123'.length * 2,
    // Read    = 1 << 1,
    // Write   = 1 << 2,
    // ReadWrite  = Read | Write,
    // // computed member
    // G = "123".length,
}

// Object.keys(Moth).forEach(e => console.log(e));
console.log(Moth.February);
console.log(Moth.March);
console.log(Moth.April);
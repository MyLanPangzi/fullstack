/**
 * 1，const枚举值只能是常量表达式，并且不能是错误的计算值
 * 2，编译后的js代码是使用了字面量值，这就是优化
 * 3，回顾一下计算值枚举跟常量值枚举的规则
 *  1，无初始赋值
 *  2，跟着无初始赋值的枚举进行自增
 *  3，五个规则定义：
 *  a，数字，字符串字面量
 *  b，引用其他常量枚举值
 *  c，中括号常量枚举表达式
 *  d，一元运算符计算常量表达式
 *  e，二元运算符计算常量表达式
 */
const enum Direction {
    Up = 0,//console.log(0 /* U */);
    U = Up,
    Down = Up + 1,
    // Left = 'ab'.length,//const enum member initializers can only contain literal values and other computed enum values.
    Left = ~Up,
    Right,
    // Front = Up / 0,//'const' enum member initializer was evaluated to disallowed value 'NaN'.
    // Back = 'a'//Computed values are not permitted in an enum with string valued members
    // Back = Direction[1]
}

console.log(Direction.U);//
// console.log(...Direction);
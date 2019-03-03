/**
 * 0，目前只能看到语法的使用，估计跟后续的namespace有关，
 * 1，环境枚举只是声明了一个枚举，并没有实际定义，用于引用外部定义的枚举
 * 2，与正常枚举的区别是，正常枚举如果上一个成员是常量枚举，本身无赋值则也被认为常量枚举
 * 3，环境枚举无初始赋值也被认为是计算值，具体还得看后面的章节才能理解
 */
declare const enum E {
    A = 1,
    B,
    C = 2
}
// enum E{// Enum declarations can only merge with namespace or other enum declarations
//
// }
console.log(E.B);

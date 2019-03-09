/**
 *1,枚举可以兼容数值
 * 2，数值可以兼容枚举
 * 3，不同的枚举是不兼容的
 */
enum Color {
    Red, Yellow, Blue
}

let c: Color = Color.Red;
c = 1;
let n: number = Color.Red;
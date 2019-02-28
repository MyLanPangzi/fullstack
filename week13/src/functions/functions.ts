/**
 * 0，函数的常见作用：
 *      构建抽象层级：类，接口
 *      信息隐藏：闭包
 *      模块化
 *      传递数据
 * 1，函数定义常见的几种方式，声明式，函数直接量，匿名箭头函数
 * 2，函数使用函数体外的变量称之为捕获
 *
 */

function add(x: number, y: number) {
    return x + y;
}

let add2 = function (x: number, y: number) {
    return x + y;
}
let add3 = (x: number, y: number): number => x + y;

let a = 10;
const capture = () => a;
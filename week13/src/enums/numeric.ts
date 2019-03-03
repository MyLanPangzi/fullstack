/**
 * 0，枚举是用来书写常量值，使常量值更有意义，变得可阅读，还可以用来区分多种case，可用枚举替换代码中的魔法数字/字符串
 * 1，数字枚举跟Java，C#类似，默认从零开始，可以赋值，后续值若无赋值，则自增
 * 2，数字枚举可以混合计算枚举，必须放在第一位或者跟在其他常量枚举后面
 */
enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500
}

const f: (code: HttpStatus) => void = code => console.log(code);
f(HttpStatus.OK);

enum Color {
    RED, YELLOW, BLUE
}

const printColor: (color: Color) => void = color => console.log(color);
printColor(Color.BLUE);

const computeDay: (day: Week) => number = day => day + 1;

enum Week {
    Monday = 1, Tuesday, Wednesday = computeDay(Tuesday),
    // Thursday//Enum member must have initializer
}


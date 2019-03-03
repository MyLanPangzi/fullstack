/**
 * 1，字符串枚举必须用字符串常量初始化，或者引用其他字符串枚举
 * 2，字符串枚举在调试时，比数字枚举更有意义，可阅读
 */
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const move: (d: Direction) => void = d => console.log('向', d, '移动了');
move(Direction.Up);
move(Direction.Down);
move(Direction.Left);
move(Direction.Right);
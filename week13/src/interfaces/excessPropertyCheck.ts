/**
 * 过量类型检查，excess property checks
 * 可以使用类型断言（as）绕过，或者使用字符串索引绕过
 * 尽量不要绕过excess property checks，
 * 这些检查能帮你检查出潜在的BUG
 */
interface SquareConfig {
    color?: string;
    width?: number;

    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number; } {
    let square = {color: 'white', area: 100};
    if (config.color) {
        square.color = config.color;
    }
    if (config.width) {
        square.area = config.width * config.width;
    }
    return square;
}

//使用类型断言as绕过过量属性检查
// const square = createSquare({colour: 'black', width: 10} as SquareConfig);
const square = createSquare({colour: 'black', width: 10});
console.log(square);
export {};
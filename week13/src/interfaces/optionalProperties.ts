/**
 * 可选属性,描述可能出现的属性，阻止使用接口未定义的属性
 */
interface SquareConfig {
    color?: string;
    width?: number;
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

const square = createSquare({color: 'black'});
console.log(square);
export {};
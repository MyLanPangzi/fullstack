/**
 * 接口能继承接口，并且能多继承
 * 可以自由组合
 * 类似于C#,Java
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

// const square: Square = <Square>{};
const square: Square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 1;
console.log(square);

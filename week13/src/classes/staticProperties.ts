/**
 * 1,用static修饰属性，属于类成员
 * 2，用className.property访问
 * 3，同样可以用四个修饰符
 */
class Grid {
    static origin = {x: 0, y: 0};
    static readonly x = 0;
    private static readonly y = 0;
    protected static readonly z = 0;

    calcDistanceFromOrigin(point: { x: number, y: number; }): number {
        const xDist = (Grid.origin.x - point.x);
        const yDist = (Grid.origin.y - point.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {

    }
}

class Grid2 extends Grid {
    constructor(scale: number) {
        super(scale);
        console.log('x', Grid.x);
        // console.log(Grid.y);//Property 'y' is private and only accessible within class 'Grid'.
        console.log('z', Grid.z);
    }
}

const grid1 = new Grid(10);
const grid2 = new Grid(20);
console.log(grid1.calcDistanceFromOrigin({x: 20, y: 20}));
console.log(grid2.calcDistanceFromOrigin({x: 20, y: 20}));

const grid3 = new Grid2(30);
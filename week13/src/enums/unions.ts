/**
 * 1，联合枚举是枚举的一个特殊子集
 * 2，当所有枚举都是字面量枚举就被认为是联合枚举类型
 *      a，字符串字面量 ‘a'
 *      b，数字字面量 1
 *      c，负号一元运算符数字字面量 -1
 * 3，联合枚举中的每个成员都是一种union types ： (a/b/c)|null|undefined
 *  只能是这三种值，不能有其他值，也就是说不能被赋予其他值，不能与其他类型做比较。。。
 *  因为null|undefined是所有类型的子类型，所以可以被赋值，是类型兼容的
 *  吐槽一下：只能说这设计真恶心。。。一时半会没明白过来。。。
 *  4，联合枚举成员可当做类型使用，用来声明类的成员变量类型。
 *
 */
enum ShapeKind {
    Circle,
    Square,
    // X = 10,
    // Y = -10,
    // Z = 'z',
    // X = 'a'.length//Enum type 'ShapeKind' has members with initializers that are not literals.
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    // kind:ShapeKind.Square // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    kind: ShapeKind.Circle,
    // kind: null,
    // kind: undefined,
    radius: 10
}

const f: (k: ShapeKind) => boolean = k => {
    if (k !== ShapeKind.Square) {
        //|| k !==ShapeKind.Circle 意思是k要么是Square要么不是，没有其他类型
        //k的值只能是ShapeKind.Square|null|undefined，不能有其他值，且不能与其他值比较
        return false;

    }
    // else if (k !== ShapeKind.Circle) {
    //     // This condition will always return 'true' since the types 'ShapeKind.Square' and 'ShapeKind.X' have no overlap.
    // }
    return true;
}
console.log(f(ShapeKind.Square));
console.log(f(ShapeKind.Circle));
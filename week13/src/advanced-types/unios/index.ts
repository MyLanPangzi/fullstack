/**
 * 1，联合类型皆既可以使用原始类型，也可以使用对象类型
 * 2，当使用对象类型时，只能使用多个源类型的公共部分
 * 3，第二点比较棘手，在运行时无法知道到底是哪一种具体类型，后续章节，类型保护以及区分类型会解决这个问题
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        console.log(padding - 1);
        return Array(padding + 1).join(' ').concat(value);
    }
    if (typeof padding === 'string') {
        // console.log(padding - 1);//TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
        return padding.concat(value);
    }
    throw new Error('padding只能是字符串或数字,错误padding:'.concat(padding));
}

padLeft('a', 5);
padLeft('a', 'aaaa');

// padLeft('a', false);//TS2345: Argument of type 'false' is not assignable to parameter of type 'string | number'.
interface Fish {
    swim();

    layEggs();
}

interface Bird {
    fly();

    layEggs();
}

type LayEggs = Fish | Bird;
let layEggs: LayEggs;
layEggs.layEggs();

/**
 * 1,可选参数必须跟在必选参数后面，使用?描述
 * 2，尾部可选参数与尾部默认值参数共享同一函数声明
 * 3，参数默认值只能出现在定义上，可出现在任意位置，如要使用默认值，可传递undefined
 */
const makeName = (firstName: string, lastName?: string) => lastName ? firstName + ' ' + lastName : firstName;
console.log(makeName('Hello', 'Ts'));
console.log(makeName('Hello'));

// let buildName: (firstName: string, lastName: string = 'World') => string = (f, l) => f + l;
// A parameter initializer is only allowed in a function or constructor implementation
let buildName: (firstName: string, lastName?: string) => string = (f, l = 'World') => f + l;
console.log(buildName('Hello'));

function generateName(f: string = 'Hello', l: string) {
    return f + l;
}

console.log(generateName(undefined, 'World'));
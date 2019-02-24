/**
 * TypeScript的接口是宽松的（lenient），只需要传递接口中声明了的属性即可
 */
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue): void {
    console.log(labelledObj.label);
}

const obj = {label: 'size 10 obj', size: 10};
printLabel(obj);
/**
 * 接口可以继承类
 * 相当于，接口将类的所有成员重新声明了一遍，但没有实现
 * 包括private,protected的成员
 * 这意味着，只有基类，以及基类的子类可以实现该接口
 * 相当于对接口的实现做了一种限制，不可随意实现
 */
class Control {

    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select(): void {
    }
}

class TextBox extends Control {
    select() {

    }
}

// Class 'Img' incorrectly implements interface 'SelectableControl'.   
// Type 'Img' is missing the following properties from type 'SelectableControl': select, state
// Class 'Img' incorrectly implements interface 'SelectableControl'.   
// Types have separate declarations of a private property 'state'.
class Img {//implements SelectableControl{
    private state: any;

    select(): void {
    }

}

class Locations {

}

const textBox: SelectableControl = new TextBox();
console.log('textBox type of', typeof textBox);
const button: SelectableControl = new Button();
console.log('button type of', typeof button);

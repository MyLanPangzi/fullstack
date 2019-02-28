/**
 * this解释比较好的文章：https://www.jianshu.com/p/d647aa6d1ae6
 * 1,JS中普通函数的this，是在运行时被确定，函数如果有调用者则指向调用者，如果没有则指向global对象，严格模式中则是undefined
 * 2，箭头函数中的this，是在创建时被确定
 * 3，可用Function.prototype.bind改变函数的this
 * 4，其实函数调用是语法糖,function f(a){} 最原始的调用方式是f.call(this,a),语法糖形式f(a)，所以不确定this时，可写出函数的原始调用方式
 * 5，TS为函数提供了一个伪造参数，this:类型，放在参数列表的第一个，用来限制函数内部this的滥用
 */
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];

    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
const card = deck.createCardPicker()();
console.log(card.suit, card.card);

function f(click: (this: void) => void): void {

}

class Caller {
    name: string;

    click(this: void) {
        // console.log(this.name);
    }

    newClick = () => console.log(this.name);
}

let caller = new Caller();
f(caller.click);
f(caller.newClick);
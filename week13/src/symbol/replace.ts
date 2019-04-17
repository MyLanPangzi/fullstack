/**
 * A regular expression method that replaces matched substrings of a string. Called by the
 String.prototype.replace method.
 1，对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
 */
const o: object = {
    [Symbol.replace](...s: string[]): void {
        s.forEach(e => console.log(e));
    }
}
'hello'.replace(o as any, 'world');
export default {};
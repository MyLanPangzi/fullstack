/**
 * 1，跟Java类似
 * 2，泛型只存在实例端，静态端不能用泛型参数
 */
class HashMap<K, V> {
    private entries;
    // static x:K;//Static members cannot reference class type parameters

    constructor() {
        // @ts-ignore
        this.entries = new Map();
    }
    set(k: K, v: V): void {
        this.entries.set(k, v);
    }

    get(k: K): V {
        return this.entries.get(k);
    }
}

let map = new HashMap<number, string>();
map.set(1, '3');
console.log(map.get(1));
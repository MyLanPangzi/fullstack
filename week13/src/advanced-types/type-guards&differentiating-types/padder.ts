/**
 * 1，TS有自带的
 */
interface Padder {
    padding(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(public numSpace: number) {

    }

    padding(): string {
        return Array(this.numSpace).join(' ');
    }

}

class StringPadder implements Padder {
    constructor(public value: string) {

    }

    padding(): string {
        return this.value;
    }

}
function FPadder() :SpaceRepeatingPadder | StringPadder {
    return new StringPadder('ssss');
}
function makePadder(): Padder {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(5) : new StringPadder('     ');
}

const padder = makePadder();
if (padder instanceof SpaceRepeatingPadder) {
    console.log('number padder');
    console.log(padder.numSpace);
}
if (padder instanceof StringPadder) {
    console.log('字符串padder');
    console.log(padder.value);
}
if (padder instanceof FPadder) {
    console.log('union types');
    padder.padding();
}
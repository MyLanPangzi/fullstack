export default {};

interface StringValidator {
    isAcceptable(s: string): boolean;
}

let letterReg = /^[a-zA-Z]+$/;
let zipCodeReg = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return letterReg.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return zipCodeReg.test(s);
    }
}

let validators: { [s: string]: StringValidator; } = {};
validators["Letters only"] = new LettersOnlyValidator();
validators["Zip Code"] = new ZipCodeValidator();

let strings = ["Hello", "1", "2", "345"];
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`${s} ${isMatch ? 'match' : 'does not match'} ${name}`);
    }
}

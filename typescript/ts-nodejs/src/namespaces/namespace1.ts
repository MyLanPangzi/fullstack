export default {};
namespace Validation {

    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    let letterReg = /^[a-zA-Z]+$/;
    let zipCodeReg = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return letterReg.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return zipCodeReg.test(s);
        }
    }

}
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["Letters only"] = new Validation.LettersOnlyValidator();
validators["Zip Code"] = new Validation.ZipCodeValidator();

let strings = ["Hello", "1", "2", "345"];
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`${s} ${isMatch ? 'match' : 'does not match'} ${name}`);
    }
}
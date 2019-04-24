///<reference path="./Validator.ts"/>

namespace Validation {
    let letterReg = /^[a-zA-Z]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return letterReg.test(s);
        }
    }
}


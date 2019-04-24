///<reference path="Validator.ts"/>

namespace Validation {
    let zipCodeReg = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return zipCodeReg.test(s);
        }
    }
}
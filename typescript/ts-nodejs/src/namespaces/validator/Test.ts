///<reference path="Validator.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>

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
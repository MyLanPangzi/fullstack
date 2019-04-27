///<reference path="./Validator.ts"/>
var Validation;
(function (Validation) {
    var letterReg = /^[a-zA-Z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return letterReg.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
///<reference path="Validator.ts"/>
var Validation;
(function (Validation) {
    var zipCodeReg = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return zipCodeReg.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
///<reference path="Validator.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>
var validators = {};
validators["Letters only"] = new Validation.LettersOnlyValidator();
validators["Zip Code"] = new Validation.ZipCodeValidator();
var strings = ["Hello", "1", "2", "345"];
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log(s + " " + (isMatch ? 'match' : 'does not match') + " " + name_1);
    }
}

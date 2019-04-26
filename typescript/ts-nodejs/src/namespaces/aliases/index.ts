export {};
export namespace Biological {
    export namespace Animal {
        export namespace Human {
            export class Man {
            }

            export class Woman {

            }
        }
    }
}
import Man = Biological.Animal.Human.Man;
import Woman = Biological.Animal.Human.Woman;

console.log(new Man(), new Woman());
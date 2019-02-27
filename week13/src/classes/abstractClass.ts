/**
 * 1，跟C#，Java类似，用abstract修饰类
 * 2，abstract修饰（实例端）方法，可与public,protected修饰符共用
 * 3，抽象方法，子类必须实现，否则子类也是抽象类
 * 4,抽象类是对类的抽象，由下自上的设计，接口是对行为的抽象，由上自下的设计
 * 5，常见的模板方法模式
 */
abstract class Animal {
    abstract makeSound(): void;

    constructor() {

    }

    move(): void {
        console.log('动物在移动');
    }
}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log(this.name);
    }

    abstract printMeeting();
}

class AccountingDepartment extends Department {
    constructor() {
        super('会计部门');
    }

    printMeeting() {
        console.log('会计部门的会议在每天早上的十点');
    }

    generateReport() {
        console.log('生成会计报告');
    }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department = new Department();
// department.generateReport();
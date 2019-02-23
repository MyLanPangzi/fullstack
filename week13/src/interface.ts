interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;

    constructor(public firstName: string, public middleInital: string, public  lastName: string) {
        this.fullName = this.firstName + this.middleInital + this.lastName;
    }
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

// let user = {firstName: 'Jack', lastName: 'Bound'};
let user = new Student('Jack', 'M', 'Bound');
console.log(greeter(user));
document.body.append(greeter(user));
function greeter(person: string) {
    return 'Hello' + person;
}

let user = 'Abc';

document.body.innerHTML = greeter(user);
export {};
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {

    }
    counter.interval = 10;
    counter.reset = function () {

    };

    return counter;
}

let c = getCounter();
c(10);
c.interval = 20;
c.reset();
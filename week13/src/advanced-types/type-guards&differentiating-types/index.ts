interface Fish {
    swim();

    layEggs();
}

interface Bird {
    fly();

    layEggs();
}

type LayEggs = Fish | Bird;

function isFish(arg: LayEggs): arg is Fish {
    return (arg as Fish).swim !== undefined;
}

function getLayEggs(): LayEggs {
    return {
        layEggs() {
        },
        swim() {
            console.log('游泳');
        }
    }
}

const fish = getLayEggs();
if (isFish(fish)) {
    fish.swim();
} else {
    fish.fly();
}


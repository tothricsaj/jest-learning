let counter = 0;
let city;
let food;

function setCity() {
    switch(counter) {
        case 0:
            city = 'Szeged'; // Szeged is a town, but the best all of the world
            counter++;
            return;
        case 1:
            city = 'Budapest';
            counter++; // it is not too necessery in this case
            return;
        default:
            return 'no city';
    }
}

function setFood() {
    switch(counter) {
        case 0:
            food = 'fish soup';
            return;
        case 1:
            food = 'steak';
        default:
            return 'no food';
    }
}

function cityFunc() {
    return city;
}

function foodFunc(city, food) {
    return city + ' -> ' + food;
}

beforeEach(() => {
    setCity();
});

test('City check...Szeged', () => {
    expect(cityFunc()).toBe('Szeged');
});

test('City check...BP', () => {
    expect(cityFunc()).toBe('Budapest');
});


describe('scope staff', () => {
    counter = 0;
    beforeEach(() => {
        setCity();
        setFood(city, food);
    });

    test('food in Szeged', () => {
        expect(foodFunc(city, food)).toBe('Szeged -> fish soup');
    });

    test('food in Bp', () => {
        expect(foodFunc(city, food)).toBe('Budapest -> steak');
    });
});

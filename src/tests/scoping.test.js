let counter = 0;
let city;
let food;

function initCity(counter) {
    switch(counter) {
        case 0:
            city = 'Szeged'; // Szeged is a town, but the best all of the world
            return;
        case 1:
            city = 'Budapest';
            return;
        default:
            return 'no city';
    }
}

function initFood(counter) {
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

function foodFunc() {
    return food;
}

beforeAll(() => {
    
});

afterAll(() => {

});

describe('scope staff', () => {

});

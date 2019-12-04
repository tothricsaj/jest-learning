/*
let counter = 0;
let city;
let food;

function setCity() {
    console.log(`counter in the setCity -> ${counter}`);
    if(counter === 2) counter = 0;
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
            city = 'no city';
            return;
    }
}

function setFood() {
    switch(counter) {
        case 1:
            food = 'fish soup';
            return;
        case 2:
            food = 'steak';
        default:
            food = 'no food';
            return ;
    }
}

function cityFunc() {
    return city;
}

function foodFunc(city, food) {
    return 'kitty';
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
    beforeEach(() => {
        setCity();
        setFood(city, food);
    });

    test('food in Szeged', () => {
        expect(foodFunc(city, food)).toBe('kitty');
    });

    test('food in Bp', () => {
        expect(foodFunc(city, food)).toBe('kitty');
    });
});
*/


describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});


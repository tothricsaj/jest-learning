const sum = require('../app/sum.js');

/*
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data.two = 2;
    const arr = ['sas', 'kacsa'];
    expect(data).toEqual({one: 1, two: 2});
    expect(arr).toEqual(['sas', 'kacsa']);
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

function compileAndroidCode() {
    throw new Error('You are using wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
    expect(compileAndroidCode).toThrow('You are using wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

function fetchData(callback) {
    let arr = [
        'peanut butter',
        'little sun',
        'flower smile'
    ];

    let data = arr[Math.floor(Math.random()*3)];
    console.log(data);
    console.log('foo bar');
    callback(data);
}

test('tha data is peanut butter', done => {
    function callback(data) {
        expect(data).toBeTruthy();
        expect((typeof data)).toBe('string');
        expect(data).toBe('peanut butter');
        // expect(data.toBe('little sun'));
        done();
    }

    fetchData(callback);
});
let fetchData = function() {
    return new Promise((resolve, reject) => {
        resolve('peanut butter');

        if(Math.floor(Math.random() * 2) === 1) reject('It is zero');
    });
}
test('Promise peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('promise with fail', () => {
    return expect(fetchData()).rejects.toMatch('It is zero');
});
*/

let c = 1;

function beforeTest(counter) {
    switch(counter) {
        case 1:
            return 'first test before';
        case 2:
            return 'second test before';
        default:
            return 'no case'
    }
}

function afterTest() {
    switch(counter) {
        case 1:
            return '1. test after';
        case 2:
            return '2. test after';
        default:
            return 'no case'
    }

}

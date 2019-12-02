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
*/

function fetchData(callback) {
    let arr = [
        'peanut butter',
        'little sun',
        'flower smile'
    ];

    let data = arr[Math.floor(Math.random()*3)];
    console.log(data);
    callback(data);
}

test('tha data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        // expect(data.toBe('little sun'));
        done();
    }

    fetchData(callback);
});

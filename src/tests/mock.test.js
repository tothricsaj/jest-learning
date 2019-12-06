axios = require('axios');

/*
function trzForEach(items, callback) {
    for(let index=0; index<items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
trzForEach([2,1], mockCallback);

test('mock practice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(2);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(44);
    expect(mockCallback.mock.results[1].value).toBe(43);

    console.log(mockCallback.mock.results[1]);
    console.log(mockCallback.mock);
    console.log(mockCallback);
});
*/

class User {
    static all() {
        return axios.get('/user.json').then(resp => resp.data);
    }
}

jest.mock('axios');

test('should fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    return User.all().then(data => expect(data).toEqual(users));
});

let myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call')
;

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

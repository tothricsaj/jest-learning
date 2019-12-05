function trzForEach(items, callback) {
    for(let index=0; index<items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
trzForEach([0,1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.calls[0][0]).toBe(0);
expect(mockCallback.mock.calls[1][0]).toBe(1);
expect(mockCallback.mock.result[0].value).toBe(42);

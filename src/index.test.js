const { sum, subtract, divide, multiply } = require('./index');

test('I expect that 2 + 2 equals 4', () => {
    expect(sum(2,2)).toBe(4);
})

test('I expect that 10 + 10 equals to 20', () => {
    expect(sum(10, 10)).toBe(20);
})

test('I expect that 10 + 50 equals to 60', () => {
    expect(sum(10, 50)).toBe(60);
})

test('I expect that 100 + 100 equals to 200', () => {
    expect(sum(100, 100)).toBe(200);
})


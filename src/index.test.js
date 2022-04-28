const { test, expect } = require('@jest/globals');
const { sum, subtract, divide, multiply } = require('./index');

//Sum function unitary tests
test('I expect that 2 + 2 equals 4', () => {
    expect(sum(2, 2)).toBe(4);
})

test('I expect that 0 + 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test('I expect that -1 + 2 equals to 1', () => {
    expect(sum(-1, 2)).toBe(1);
})

test('I expect that 5 + -3 equals to 2', () => {
    expect(sum(5, -3)).toBe(2);
})

test('I expect that -1 + -2 equals to -3', () => {
    expect(sum(-1, -2)).toBe(-3);
})

test('I expect that 1.25 + 0.75 equals to 2', () => {
    expect(sum(1.25, 0.75)).toBe(2);
})

test('I expect that 6 + 0.75 equals to 6.75', () => {
    expect(sum(6, 0.75)).toBe(6.75);
})

test('I expect that 1.50 + 4 equals to 5.50', () => {
    expect(sum(1.50, 4)).toBe(5.50);
})

test('I expect that 5 + null equals to 5', () => {
    expect(sum(5, null)).toBe(5);
})

test('I expect that null + 5 equals to 5', () => {
    expect(sum(null, 5)).toBe(5);
})

test('I expect that null + null equals to 0', () => {
    expect(sum(null, null)).toBe(0);
})

// Subtract function unitary tests
test('I expect that 0 - 0 equals to 0', () => {
    expect(subtract(0 , 0)).toBe(0);
})

test('I expect that 5 - 0 equals to 5', () => {
    expect(subtract(5 , 0)).toBe(5);
})

test('I expect that 0 - 5 equals to -5', () => {
    expect(subtract(0 , 5)).toBe(-5);
})

test('I expect that -5 - -5 equals to 0', () => {
    expect(subtract(-5 , -5)).toBe(0);
})

test('I expect that -5 - -10 equals to 5', () => {
    expect(subtract(-5 , -10)).toBe(5);
})

test('I expect that -10 - -1 equals to -9', () => {
    expect(subtract(-10 , -1)).toBe(-9);
})

test('I expect that 10 - null equals to 10', () => {
    expect(subtract(10 , null)).toBe(10);
})

test('I expect that null - 1 equals to -1', () => {
    expect(subtract(null, 1)).toBe(-1);
})

test('I expect that null - null equals to 0', () => {
    expect(subtract(null , null)).toBe(0);
})

test('I expect that 1 - 0.25 equals to 0.75', () => {
    expect(subtract(1 , 0.25)).toBe(0.75);
})

test('I expect that 4.25 - 1 equals to 3.25', () => {
    expect(subtract(4.25 , 1)).toBe(3.25);
})

test('I expect that 3.25 - 0.25 equals to 3', () => {
    expect(subtract(3.25 , 0.25)).toBe(3);
})

test('I expect that 0.25 - 3.25 equals to -3', () => {
    expect(subtract(0.25 , 3.25)).toBe(-3);
})
const { test, expect, describe } = require('@jest/globals');
const { sum, subtract, divide, multiply } = require('./index');

describe('Sum function tests', () => {

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
})

describe('Subtract function tests', () => {

    test('I expect that 0 - 0 equals to 0', () => {
        expect(subtract(0, 0)).toBe(0);
    })

    test('I expect that 5 - 0 equals to 5', () => {
        expect(subtract(5, 0)).toBe(5);
    })

    test('I expect that 0 - 5 equals to -5', () => {
        expect(subtract(0, 5)).toBe(-5);
    })

    test('I expect that -5 - -5 equals to 0', () => {
        expect(subtract(-5, -5)).toBe(0);
    })

    test('I expect that -5 - -10 equals to 5', () => {
        expect(subtract(-5, -10)).toBe(5);
    })

    test('I expect that -10 - -1 equals to -9', () => {
        expect(subtract(-10, -1)).toBe(-9);
    })

    test('I expect that 10 - null equals to 10', () => {
        expect(subtract(10, null)).toBe(10);
    })

    test('I expect that null - 1 equals to -1', () => {
        expect(subtract(null, 1)).toBe(-1);
    })

    test('I expect that null - null equals to 0', () => {
        expect(subtract(null, null)).toBe(0);
    })

    test('I expect that 1 - 0.25 equals to 0.75', () => {
        expect(subtract(1, 0.25)).toBe(0.75);
    })

    test('I expect that 4.25 - 1 equals to 3.25', () => {
        expect(subtract(4.25, 1)).toBe(3.25);
    })

    test('I expect that 3.25 - 0.25 equals to 3', () => {
        expect(subtract(3.25, 0.25)).toBe(3);
    })

    test('I expect that 0.25 - 3.25 equals to -3', () => {
        expect(subtract(0.25, 3.25)).toBe(-3);
    })
})

describe('Divide function tests', () => {

    test('I expect that 0 / 0 equals to NaN', () => {
        expect(divide(0, 0)).toBeNaN();
    })

    test('I expect that 0 / 10000 equals to 0', () => {
        expect(divide(0, 10000)).toBe(0);
    })

    test('I expect that 1 / 0 equals to Infinity', () => {
        expect(divide(1, 0)).toEqual(Infinity);
    })

    test('I expect that 5 / 100 equals to 0.05', () => {
        expect(divide(5, 100)).toBe(0.05);
    })

    test('I expect that 10 / 1.5 equals to 6.666666666666667', () => {
        expect(divide(10, 1.5)).toBe(6.666666666666667);
    })

    test('I expect that 2.3 / 6 equals to 0.3833333333333333', () => {
        expect(divide(2.3, 6)).toBe(0.3833333333333333);
    })

    test('I expect that 8.2 / 4.1 equals to 2', () => {
        expect(divide(8.2, 4.1)).toBe(2);
    })

    test('I expect that 5.5 / 2.3 equals to 2.3913043478260874', () => {
        expect(divide(5.5, 2.3)).toBe(2.3913043478260874);
    })

    test('I expect that 6 / 6 equals to 1', () => {
        expect(divide(6, 6)).toBe(1);
    })

    test('I expect that -6 / 6 equals to -1', () => {
        expect(divide(-6, 6)).toBe(-1);
    })

    test('I expect that 6 / -6 equals to -1', () => {
        expect(divide(6, -6)).toBe(-1);
    })

    test('I expect that -10 / -5 equals to 2', () => {
        expect(divide(-10, -5)).toBe(2);
    })

    test('I expect that null / 10000 equals to 0', () => {
        expect(divide(null, 10000)).toBe(0);
    })

    test('I expect that 45 / null equals to Infinity', () => {
        expect(divide(45, null)).toEqual(Infinity);
    })

    test('I expect that null / null equals to NaN', () => {
        expect(divide(null, null)).toBeNaN();
    })
})

describe('Multiply function tests', () => {

    test('I expect that 1 * 1 equals to 1', () => {
        expect(multiply(1, 1)).toBe(1);
    })

    test('I expect that 0 * 1 equals to 0', () => {
        expect(multiply(0, 1)).toBe(0);
    })

    test('I expect that 0 * 15016 equals to 0', () => {
        expect(multiply(0, 15016)).toBe(0);
    })

    test('I expect that 0 * 0 equals to 0', () => {
        expect(multiply(0, 0)).toBe(0);
    })

    test('I expect that -15 * 45 equals to -675', () => {
        expect(multiply(-15, 45)).toBe(-675);
    })

    test('I expect that 15 * -45 equals to -675', () => {
        expect(multiply(15, -45)).toBe(-675);
    })

    test('I expect that -15 * -45 equals to 675', () => {
        expect(multiply(-15, -45)).toBe(675);
    })

    test('I expect that 0.35 * 4 equals to 1.4', () => {
        expect(multiply(0.35, 4)).toBe(1.4);
    })

    test('I expect that 10 * 0.35 equals to 3.5', () => {
        expect(multiply(10, 0.35)).toBe(3.5);
    })

    test('I expect that 0.2 * 0.5 equals to 0.10', () => {
        expect(multiply(0.2, 0.5)).toBe(0.10);
    })

    test('I expect that 0.35 * 4 equals to 1.4', () => {
        expect(multiply(0.35, 4)).toBe(1.4);
    })

    test('I expect that null * 10 equals to 0', () => {
        expect(multiply(null, 10)).toBe(0);
    })

    test('I expect that 150000 * null equals to 0', () => {
        expect(multiply(150000, null)).toBe(0);
    })

    test('I expect that null * null equals to 0', () => {
        expect(multiply(null, null)).toBe(0);
    })

    test('I expect that null * -15 equals to 0', () => {
        expect(multiply(null, -15)).toBe(-0);
    })

    test('I expect that -0.478 * null equals to 0', () => {
        expect(multiply(-0.478, null)).toBe(-0);
    })
})
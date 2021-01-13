// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('It should return 0 when provided the same number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return -1 when provided 3, 5', (expect) => {
    const expected = -1;

    const actual = compareNumbers(3, 5);

    expect.equal(actual, expected);
});

test('It should return 1 when provided 5 and 3', (expect) => {
    const expected = 1;

    const actual = compareNumbers(5, 3);

    expect.equal(actual, expected);
});
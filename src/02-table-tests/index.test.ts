// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 7, b: 5, action: Action.Subtract, expected: 2 },
  { a: 10, b: 7, action: Action.Subtract, expected: 3 },
  { a: 10, b: 7, action: Action.Multiply, expected: 70 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 100, b: 10, action: Action.Divide, expected: 10 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 2, b: 4, action: Action, expected: null },
  { a: 5, b: 7, action: Action, expected: null },
  { a: 2, b: 10, action: Action, expected: null },
  { a: 'aaa', b: 2, action: Action.Add, expected: null },
  { a: 2, b: undefined, action: Action.Add, expected: null },
  { a: true, b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    `should return '$expected' when a = '$a' b = '$b' action = '$action'`,
    (testCondition) => {
      const { a, b, action, expected } = testCondition;
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});

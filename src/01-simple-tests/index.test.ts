// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 40, b: 2, action: Action.Add })).toBe(42);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 40, b: 2, action: Action.Subtract })).toBe(38);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 40, b: 2, action: Action.Multiply })).toBe(80);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 40, b: 2, action: Action.Divide })).toBe(20);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 3, b: 2, action: Action.Exponentiate })).toBe(
      9,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 40, b: 2, action: Action })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'fefe', b: 2, action: Action.Divide })).toBe(
      null,
    );
  });
});

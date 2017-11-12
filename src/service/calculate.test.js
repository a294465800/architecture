import {
  calculate
} from './calculate.js'

test('return 1', () => {
  expect(calculate(1)).toBe(3);
});

test('return 3', () => {
  expect(calculate(4)).toBe(1);
});
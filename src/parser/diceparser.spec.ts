import { evaluate } from './diceparser';

describe('diceparser/evaluate test suite', () => {
  const basicTests = [
    { input: '1d3', expectedMin: 1, expectedMax: 3 },
    { input: '1d4', expectedMin: 1, expectedMax: 4 },
    { input: '1d6', expectedMin: 1, expectedMax: 6 },
    { input: '1d8', expectedMin: 1, expectedMax: 8 },
    { input: '1d10', expectedMin: 1, expectedMax: 10 },
    { input: '1d12', expectedMin: 1, expectedMax: 12 },
    { input: '1d20', expectedMin: 1, expectedMax: 20 },
    { input: 'd100', expectedMin: 1, expectedMax: 100 },
    { input: '1d100', expectedMin: 1, expectedMax: 100 },
    { input: '4d100', expectedMin: 4, expectedMax: 400 },
    { input: '10d100', expectedMin: 10, expectedMax: 1000 },
  ];

  const complexeTests = [
    { input: '(1d3 + 1d3) * 2', expectedMin: 4, expectedMax: 12 },
    { input: '1d100 - 100', expectedMin: -99, expectedMax: 0 },
    { input: '1d100 + 4d10', expectedMin: 5, expectedMax: 140 },
  ];

  [...basicTests, ...complexeTests].forEach(testInput => {
    test(`${testInput.input} should return something between ${testInput.expectedMin} and ${testInput.expectedMax}`, () => {
      for (let i = 0; i < 100; i += 1) {
        const result = evaluate(testInput.input);
        expect(result.value).not.toBeNaN();
        expect(result.value).toBeGreaterThanOrEqual(testInput.expectedMin);
        expect(result.value).toBeLessThanOrEqual(testInput.expectedMax);
      }
    });
  });
});

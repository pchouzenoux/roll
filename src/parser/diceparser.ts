import { evaluate as evaluateMathExpression } from 'mathjs';

const DICE_REGEX = /(\d*d\d+)/gi;

export interface Result {
  input: string;
  value: number;
  details: any[];
}
function roll(dice: string): Result {
  const diceDefinition = dice.toLowerCase().split('d');

  const diceMultiplier = diceDefinition[0] === '' ? 1 : diceDefinition[0];
  const diceMax = diceDefinition[1];

  const details = [];
  for (let i = 0; i < Number(diceMultiplier); i += 1) {
    details.push(Math.floor(Math.random() * Number(diceMax)) + 1);
  }

  return {
    input: dice,
    value: details.reduce((acc, val) => acc + val, 0),
    details,
  };
}

export const evaluate = (expression: string | string[]): Result => {
  const input = Array.isArray(expression) ? expression.join(' ') : expression;
  const dices = input.toLowerCase().match(DICE_REGEX);

  const details = [];

  let buffer = input;
  for (const dice of dices) {
    const diceValue = roll(dice);
    details.push(diceValue);
    buffer = buffer.replace(new RegExp(dice, 'i'), `${diceValue.value}`);
  }

  return { value: Number(evaluateMathExpression(buffer)), input, details };
};

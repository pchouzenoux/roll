import chalk from 'chalk';
import { RollConfig } from '../config';
import { Result } from '../parser';

function getInput(result: Result, rollConfig: RollConfig): string {
  if (rollConfig.options.verbose) {
    let detailInput = result.input;
    for (const detail of result.details) {
      detailInput = detailInput.replace(
        new RegExp(detail.input, 'i'),
        `${detail.input} (${detail.details.join(', ')})`,
      );
    }
    return detailInput;
  }

  return result.input;
}

export const printResult = (result: Result, rollConfig: RollConfig): void => {
  const input = getInput(result, rollConfig);
  console.log(chalk.bold('Roll'), input, chalk.bold('='), result.value);

  if (rollConfig?.options?.includeHalf) {
    console.log(
      chalk.bold('      ', 'Half', ' '),
      Math.floor(result.value / 2),
    );
  }
  if (rollConfig?.options?.include5th) {
    console.log(
      chalk.bold('      ', '5th', '  '),
      Math.floor(result.value / 5),
    );
  }
};

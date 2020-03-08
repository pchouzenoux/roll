import { args } from './command';
import { loadConfig } from './config';
import { evaluate } from './parser';
import { printResult } from './reporter';

export default function roll(): void {
  const rollConfig = loadConfig(args);

  const result = evaluate(args._);
  printResult(result, rollConfig);
}

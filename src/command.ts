import yargs from 'yargs';

export const args = yargs
  .scriptName('roll')
  .usage('$0 <diceExpr>')
  .command(
    '[diceExpr]',
    'Roll the dice expression, example: 1d20, 2d20 + 4, ...',
  )
  .help().argv;

import fs from 'fs';

export interface RollConfig {
  verbose?: boolean;
}

const DEFAULT_CONFIG: RollConfig = {
  verbose: false,
};

export const loadConfig = (args: any): RollConfig => {
  console.log(args);
  return {
    ...DEFAULT_CONFIG,
    ...args,
  };
};

export interface RollConfig {
  verbose?: boolean;
}

const DEFAULT_CONFIG: RollConfig = {
  verbose: false,
};

export const loadConfig = (args: any): RollConfig => {
  return {
    ...DEFAULT_CONFIG,
    ...args,
  };
};

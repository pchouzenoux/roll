export interface RollConfig {
  verbose?: boolean;
}

const DEFAULT_CONFIG: RollConfig = {
  verbose: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadConfig = (args: any): RollConfig => {
  return {
    ...DEFAULT_CONFIG,
    ...args,
  };
};

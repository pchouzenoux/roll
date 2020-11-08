import fs from 'fs';

export interface RollConfig {
  options?: {
    verbose?: boolean;
    include5th?: boolean;
    includeHalf?: boolean;
  };
}

const DEFAULT_CONFIG: RollConfig = {};

const getDefaultConfig = (): RollConfig => {
  try {
    const rollConfigFile = fs.readFileSync('./.rollrc');

    return JSON.parse(rollConfigFile.toString());
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
  return DEFAULT_CONFIG;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadConfig = (args: any): RollConfig => {
  const config = getDefaultConfig();

  config.options = {
    ...config?.options,
    ...args,
  };

  return config;
};

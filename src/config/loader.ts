import fs from 'fs';

const DEFAULT_CONFIG: RollConfig = {};

export interface RollConfig {
  options?: {
    verbose?: boolean;
    include5th?: boolean;
    includeHalf?: boolean;
  };
}

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
export const loadConfig = (args: any): RollConfig => {
  const config = getDefaultConfig();

  config.options = {
    ...config?.options,
    ...args,
  };

  return config;
};

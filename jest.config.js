module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['reflect-metadata', './test/global.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

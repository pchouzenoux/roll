/**
 * Global test logger
 */
global['test-logger'] = {
  debug: jest.fn(),
  info: jest.fn(),
  trace: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// empty export or ts will complain with the isolatedModules option
export {};
